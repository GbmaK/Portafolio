"use client"

import { useEffect, useRef, useState } from "react"

const COLOR_PALETTE = [
  [79, 70, 229],
  [6, 182, 212],
  [16, 185, 129],
  [245, 158, 11],
]

function randomBetween(min, max) {
  return Math.random() * (max - min) + min
}

function requestIdle(windowObject, callback) {
  if ("requestIdleCallback" in windowObject) {
    return windowObject.requestIdleCallback(callback, { timeout: 900 })
  }

  return windowObject.setTimeout(callback, 320)
}

function cancelIdle(windowObject, id) {
  if ("cancelIdleCallback" in windowObject) {
    windowObject.cancelIdleCallback(id)
    return
  }

  windowObject.clearTimeout(id)
}

export function VisualEffects() {
  const canvasRef = useRef(null)
  const [motionEnabled, setMotionEnabled] = useState(false)
  const [performanceScale, setPerformanceScale] = useState(1)
  const [idleReady, setIdleReady] = useState(false)
  const particlesEnabled = motionEnabled && idleReady

  useEffect(() => {
    const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)")

    function syncCapabilities() {
      const allowMotion = !reduceMotionQuery.matches

      const cores = typeof navigator.hardwareConcurrency === "number" ? navigator.hardwareConcurrency : 8
      const memory = typeof navigator.deviceMemory === "number" ? navigator.deviceMemory : 8
      const scale = cores <= 4 || memory <= 4 ? 0.78 : 1

      setMotionEnabled(allowMotion)
      setPerformanceScale(scale)
    }

    syncCapabilities()
    reduceMotionQuery.addEventListener("change", syncCapabilities)

    return () => {
      reduceMotionQuery.removeEventListener("change", syncCapabilities)
    }
  }, [])

  useEffect(() => {
    const idleId = requestIdle(window, () => setIdleReady(true))

    return () => {
      cancelIdle(window, idleId)
    }
  }, [])

  useEffect(() => {
    const root = document.documentElement

    if (!motionEnabled) {
      root.style.setProperty("--motion-x", "0")
      root.style.setProperty("--motion-y", "0")
      root.style.setProperty("--scroll-progress", "0")
      return
    }

    let frame = 0
    let currentX = 0
    let currentY = 0
    let targetX = 0
    let targetY = 0

    function syncScrollProgress() {
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight)
      const progress = window.scrollY / maxScroll
      root.style.setProperty("--scroll-progress", progress.toFixed(4))
    }

    function animateMotion() {
      frame = 0
      currentX += (targetX - currentX) * 0.12
      currentY += (targetY - currentY) * 0.12

      root.style.setProperty("--motion-x", currentX.toFixed(4))
      root.style.setProperty("--motion-y", currentY.toFixed(4))

      const settled = Math.abs(currentX - targetX) < 0.001 && Math.abs(currentY - targetY) < 0.001
      if (!settled) {
        frame = window.requestAnimationFrame(animateMotion)
      }
    }

    function scheduleMotion() {
      if (!frame) {
        frame = window.requestAnimationFrame(animateMotion)
      }
    }

    function onPointerMove(event) {
      targetX = (event.clientX / window.innerWidth - 0.5) * 2
      targetY = (event.clientY / window.innerHeight - 0.5) * 2
      scheduleMotion()
    }

    function onPointerOut(event) {
      if (event.relatedTarget === null) {
        targetX = 0
        targetY = 0
        scheduleMotion()
      }
    }

    syncScrollProgress()
    window.addEventListener("scroll", syncScrollProgress, { passive: true })
    window.addEventListener("resize", syncScrollProgress)
    window.addEventListener("pointermove", onPointerMove, { passive: true })
    window.addEventListener("mouseout", onPointerOut)

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener("scroll", syncScrollProgress)
      window.removeEventListener("resize", syncScrollProgress)
      window.removeEventListener("pointermove", onPointerMove)
      window.removeEventListener("mouseout", onPointerOut)
      root.style.setProperty("--motion-x", "0")
      root.style.setProperty("--motion-y", "0")
      root.style.setProperty("--scroll-progress", "0")
    }
  }, [motionEnabled])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext("2d")
    if (!context) return

    if (!particlesEnabled) {
      context.clearRect(0, 0, canvas.width, canvas.height)
      return
    }

    const pointer = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      active: false,
    }

    let width = 0
    let height = 0
    let dpr = 1
    let particles = []
    let frame = 0
    let lastFrameTime = 0

    const targetFrameDuration = 1000 / 50
    const pointerThresholdSq = 200 * 200
    const connectionThreshold = 120
    const connectionThresholdSq = connectionThreshold * connectionThreshold
    const maxLinksPerParticle = 7

    function createParticle() {
      const color = COLOR_PALETTE[Math.floor(Math.random() * COLOR_PALETTE.length)]
      return {
        x: randomBetween(0, width),
        y: randomBetween(0, height),
        vx: randomBetween(-0.52, 0.52),
        vy: randomBetween(-0.52, 0.52),
        radius: randomBetween(1.6, 3.4),
        alpha: randomBetween(0.35, 0.9),
        color,
      }
    }

    function resizeCanvas() {
      width = window.innerWidth
      height = window.innerHeight
      dpr = Math.min(2, window.devicePixelRatio || 1)

      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      context.setTransform(dpr, 0, 0, dpr, 0, 0)

      const particleCount = Math.max(36, Math.floor(Math.min(110, Math.max(42, Math.floor(width / 24))) * performanceScale))
      particles = Array.from({ length: particleCount }, createParticle)
    }

    function onPointerMove(event) {
      pointer.x = event.clientX
      pointer.y = event.clientY
      pointer.active = true
    }

    function onPointerOut(event) {
      if (event.relatedTarget === null) {
        pointer.active = false
      }
    }

    function animateParticles(timestamp) {
      frame = window.requestAnimationFrame(animateParticles)
      if (document.hidden) return
      if (timestamp - lastFrameTime < targetFrameDuration) return
      lastFrameTime = timestamp

      context.clearRect(0, 0, width, height)

      for (let index = 0; index < particles.length; index += 1) {
        const particle = particles[index]

        if (pointer.active) {
          const dx = pointer.x - particle.x
          const dy = pointer.y - particle.y
          const distanceSq = dx * dx + dy * dy

          if (distanceSq < pointerThresholdSq) {
            const distance = Math.sqrt(distanceSq) || 1
            particle.vx += (dx / distance) * 0.0032
            particle.vy += (dy / distance) * 0.0032
          }
        }

        particle.vx *= 0.996
        particle.vy *= 0.996
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < -20) particle.x = width + 20
        if (particle.x > width + 20) particle.x = -20
        if (particle.y < -20) particle.y = height + 20
        if (particle.y > height + 20) particle.y = -20

        context.beginPath()
        context.fillStyle = `rgba(${particle.color[0]}, ${particle.color[1]}, ${particle.color[2]}, ${particle.alpha})`
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        context.fill()

        let renderedLinks = 0
        for (let compareIndex = index + 1; compareIndex < particles.length; compareIndex += 1) {
          const other = particles[compareIndex]
          const dx = particle.x - other.x
          const dy = particle.y - other.y
          const distanceSq = dx * dx + dy * dy

          if (distanceSq < connectionThresholdSq) {
            const alpha = (1 - distanceSq / connectionThresholdSq) * 0.22
            context.beginPath()
            context.strokeStyle = `rgba(14, 116, 144, ${alpha})`
            context.lineWidth = 1
            context.moveTo(particle.x, particle.y)
            context.lineTo(other.x, other.y)
            context.stroke()
            renderedLinks += 1

            if (renderedLinks >= maxLinksPerParticle) {
              break
            }
          }
        }
      }
    }

    resizeCanvas()
    frame = window.requestAnimationFrame(animateParticles)
    window.addEventListener("resize", resizeCanvas)
    window.addEventListener("pointermove", onPointerMove, { passive: true })
    window.addEventListener("mouseout", onPointerOut)

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("pointermove", onPointerMove)
      window.removeEventListener("mouseout", onPointerOut)
      context.clearRect(0, 0, width, height)
    }
  }, [particlesEnabled, performanceScale])

  return (
    <>
      <canvas ref={canvasRef} className="visual-particles" aria-hidden="true" />
    </>
  )
}
