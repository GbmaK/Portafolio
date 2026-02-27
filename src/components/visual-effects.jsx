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

export function VisualEffects() {
  const canvasRef = useRef(null)
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [motionEnabled, setMotionEnabled] = useState(false)
  const [cursorEnabled, setCursorEnabled] = useState(false)
  const [performanceScale, setPerformanceScale] = useState(1)

  useEffect(() => {
    const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const finePointerQuery = window.matchMedia("(pointer: fine)")
    const hoverQuery = window.matchMedia("(hover: hover)")

    function syncCapabilities() {
      const allowMotion = !reduceMotionQuery.matches
      const allowCursor = allowMotion && finePointerQuery.matches && hoverQuery.matches

      const cores = typeof navigator.hardwareConcurrency === "number" ? navigator.hardwareConcurrency : 8
      const memory = typeof navigator.deviceMemory === "number" ? navigator.deviceMemory : 8
      const scale = cores <= 4 || memory <= 4 ? 0.78 : 1

      setMotionEnabled(allowMotion)
      setCursorEnabled(allowCursor)
      setPerformanceScale(scale)
      document.body.classList.toggle("fx-cursor-enabled", allowCursor)
    }

    syncCapabilities()
    reduceMotionQuery.addEventListener("change", syncCapabilities)
    finePointerQuery.addEventListener("change", syncCapabilities)
    hoverQuery.addEventListener("change", syncCapabilities)

    return () => {
      reduceMotionQuery.removeEventListener("change", syncCapabilities)
      finePointerQuery.removeEventListener("change", syncCapabilities)
      hoverQuery.removeEventListener("change", syncCapabilities)
      document.body.classList.remove("fx-cursor-enabled")
    }
  }, [])

  useEffect(() => {
    if (!motionEnabled) {
      document.documentElement.style.setProperty("--motion-x", "0")
      document.documentElement.style.setProperty("--motion-y", "0")
      document.documentElement.style.setProperty("--scroll-progress", "0")
      return
    }

    const root = document.documentElement
    let frame = 0
    let currentX = 0
    let currentY = 0
    let targetX = 0
    let targetY = 0

    function onPointerMove(event) {
      targetX = (event.clientX / window.innerWidth - 0.5) * 2
      targetY = (event.clientY / window.innerHeight - 0.5) * 2
    }

    function animate() {
      if (document.hidden) {
        frame = window.requestAnimationFrame(animate)
        return
      }

      currentX += (targetX - currentX) * 0.08
      currentY += (targetY - currentY) * 0.08
      root.style.setProperty("--motion-x", currentX.toFixed(4))
      root.style.setProperty("--motion-y", currentY.toFixed(4))

      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight)
      const progress = window.scrollY / maxScroll
      root.style.setProperty("--scroll-progress", progress.toFixed(4))

      frame = window.requestAnimationFrame(animate)
    }

    window.addEventListener("pointermove", onPointerMove, { passive: true })
    frame = window.requestAnimationFrame(animate)

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener("pointermove", onPointerMove)
      root.style.setProperty("--motion-x", "0")
      root.style.setProperty("--motion-y", "0")
      root.style.setProperty("--scroll-progress", "0")
    }
  }, [motionEnabled])

  useEffect(() => {
    if (!cursorEnabled) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let pointerX = window.innerWidth / 2
    let pointerY = window.innerHeight / 2
    let ringX = pointerX
    let ringY = pointerY
    let frame = 0

    function setVisible(visible) {
      dot.classList.toggle("is-visible", visible)
      ring.classList.toggle("is-visible", visible)
    }

    function setHover(target) {
      const interactive = target?.closest?.("a, button, input, textarea, select, [role='button']")
      ring.classList.toggle("is-hover", Boolean(interactive))
    }

    function onMove(event) {
      pointerX = event.clientX
      pointerY = event.clientY
      dot.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0)`
      setVisible(true)
      setHover(event.target)
    }

    function onPointerDown() {
      ring.classList.add("is-click")
    }

    function onPointerUp() {
      ring.classList.remove("is-click")
    }

    function onLeave(event) {
      if (event.relatedTarget === null) {
        setVisible(false)
        ring.classList.remove("is-hover", "is-click")
      }
    }

    function animate() {
      if (document.hidden) {
        frame = window.requestAnimationFrame(animate)
        return
      }

      ringX += (pointerX - ringX) * 0.2
      ringY += (pointerY - ringY) * 0.2
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`
      frame = window.requestAnimationFrame(animate)
    }

    window.addEventListener("pointermove", onMove, { passive: true })
    window.addEventListener("pointerdown", onPointerDown)
    window.addEventListener("pointerup", onPointerUp)
    window.addEventListener("mouseout", onLeave)
    frame = window.requestAnimationFrame(animate)

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener("pointermove", onMove)
      window.removeEventListener("pointerdown", onPointerDown)
      window.removeEventListener("pointerup", onPointerUp)
      window.removeEventListener("mouseout", onLeave)
      ring.classList.remove("is-hover", "is-click", "is-visible")
      dot.classList.remove("is-visible")
    }
  }, [cursorEnabled])

  useEffect(() => {
    if (!motionEnabled) return

    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext("2d")
    if (!context) return

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

    function animate(timestamp) {
      frame = window.requestAnimationFrame(animate)
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
    frame = window.requestAnimationFrame(animate)

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
  }, [motionEnabled, performanceScale])

  return (
    <>
      <canvas ref={canvasRef} className="visual-particles" aria-hidden="true" />
      {cursorEnabled ? (
        <>
          <div ref={ringRef} className="custom-cursor-ring" aria-hidden="true" />
          <div ref={dotRef} className="custom-cursor-dot" aria-hidden="true" />
        </>
      ) : null}
    </>
  )
}
