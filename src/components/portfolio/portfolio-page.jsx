"use client"

import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"
import {
  BarChart3,
  Briefcase,
  Code,
  Database,
  Download,
  ExternalLink,
  Globe2,
  Github,
  Languages,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Rocket,
  Target,
} from "lucide-react"

import { useLanguage } from "@/components/language-provider"
import { SectionHeading } from "@/components/portfolio/section-heading"
import { SiteHeader } from "@/components/site-header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { portfolioContent, portfolioProfile } from "@/content/portfolio-content"
import { cn } from "@/lib/utils"

const VisualEffects = dynamic(() => import("@/components/visual-effects").then((mod) => mod.VisualEffects), {
  ssr: false,
})

const ContactForm = dynamic(() => import("@/components/contact-form").then((mod) => mod.ContactForm), {
  ssr: false,
  loading: () => (
    <div className="space-y-3" aria-hidden="true">
      <div className="h-10 animate-pulse rounded-xl bg-cyan-100/70 dark:bg-cyan-950/30" />
      <div className="h-10 animate-pulse rounded-xl bg-cyan-100/70 dark:bg-cyan-950/30" />
      <div className="h-10 animate-pulse rounded-xl bg-cyan-100/70 dark:bg-cyan-950/30" />
      <div className="h-36 animate-pulse rounded-2xl bg-cyan-100/70 dark:bg-cyan-950/30" />
    </div>
  ),
})

const TONES = {
  indigo: {
    badge:
      "border-indigo-300/85 bg-indigo-50 text-indigo-900 dark:border-indigo-700/80 dark:bg-indigo-950/45 dark:text-indigo-100",
    card:
      "border-indigo-300/60 bg-indigo-50/65 shadow-[0_22px_56px_-42px_rgba(79,70,229,0.42)] backdrop-blur-sm dark:border-indigo-800/70 dark:bg-indigo-950/22",
    subtle:
      "border-indigo-300/60 bg-indigo-100/75 dark:border-indigo-800/70 dark:bg-indigo-950/40",
    icon: "text-indigo-700 dark:text-indigo-200",
    dot: "bg-indigo-500 dark:bg-indigo-300",
    chips:
      "[&>*]:border-indigo-300/65 [&>*]:bg-indigo-50/85 [&>*]:text-indigo-900 dark:[&>*]:border-indigo-800/70 dark:[&>*]:bg-indigo-950/45 dark:[&>*]:text-indigo-100",
    button:
      "rounded-full bg-indigo-600 text-white hover:bg-indigo-500 dark:bg-indigo-300 dark:text-indigo-950 dark:hover:bg-indigo-200",
  },
  cyan: {
    badge:
      "border-cyan-300/85 bg-cyan-50 text-cyan-900 dark:border-cyan-700/80 dark:bg-cyan-950/45 dark:text-cyan-100",
    card:
      "border-cyan-300/60 bg-cyan-50/62 shadow-[0_22px_56px_-42px_rgba(8,145,178,0.4)] backdrop-blur-sm dark:border-cyan-800/70 dark:bg-cyan-950/22",
    subtle: "border-cyan-300/60 bg-cyan-100/75 dark:border-cyan-800/70 dark:bg-cyan-950/40",
    icon: "text-cyan-700 dark:text-cyan-200",
    dot: "bg-cyan-500 dark:bg-cyan-300",
    chips:
      "[&>*]:border-cyan-300/65 [&>*]:bg-cyan-50/85 [&>*]:text-cyan-900 dark:[&>*]:border-cyan-800/70 dark:[&>*]:bg-cyan-950/45 dark:[&>*]:text-cyan-100",
    button:
      "rounded-full bg-cyan-600 text-white hover:bg-cyan-500 dark:bg-cyan-300 dark:text-cyan-950 dark:hover:bg-cyan-200",
  },
  emerald: {
    badge:
      "border-emerald-300/85 bg-emerald-50 text-emerald-900 dark:border-emerald-700/80 dark:bg-emerald-950/45 dark:text-emerald-100",
    card:
      "border-emerald-300/60 bg-emerald-50/62 shadow-[0_22px_56px_-42px_rgba(5,150,105,0.38)] backdrop-blur-sm dark:border-emerald-800/70 dark:bg-emerald-950/22",
    subtle:
      "border-emerald-300/60 bg-emerald-100/75 dark:border-emerald-800/70 dark:bg-emerald-950/40",
    icon: "text-emerald-700 dark:text-emerald-200",
    dot: "bg-emerald-500 dark:bg-emerald-300",
    chips:
      "[&>*]:border-emerald-300/65 [&>*]:bg-emerald-50/85 [&>*]:text-emerald-900 dark:[&>*]:border-emerald-800/70 dark:[&>*]:bg-emerald-950/45 dark:[&>*]:text-emerald-100",
    button:
      "rounded-full bg-emerald-600 text-white hover:bg-emerald-500 dark:bg-emerald-300 dark:text-emerald-950 dark:hover:bg-emerald-200",
  },
  amber: {
    badge:
      "border-amber-300/85 bg-amber-50 text-amber-900 dark:border-amber-700/80 dark:bg-amber-950/45 dark:text-amber-100",
    card:
      "border-amber-300/60 bg-amber-50/62 shadow-[0_22px_56px_-42px_rgba(217,119,6,0.36)] backdrop-blur-sm dark:border-amber-800/70 dark:bg-amber-950/22",
    subtle: "border-amber-300/60 bg-amber-100/75 dark:border-amber-800/70 dark:bg-amber-950/40",
    icon: "text-amber-700 dark:text-amber-200",
    dot: "bg-amber-500 dark:bg-amber-300",
    chips:
      "[&>*]:border-amber-300/65 [&>*]:bg-amber-50/85 [&>*]:text-amber-900 dark:[&>*]:border-amber-800/70 dark:[&>*]:bg-amber-950/45 dark:[&>*]:text-amber-100",
    button:
      "rounded-full bg-amber-600 text-white hover:bg-amber-500 dark:bg-amber-300 dark:text-amber-950 dark:hover:bg-amber-200",
  },
}

const ICONS = {
  briefcase: Briefcase,
  code: Code,
  database: Database,
}

const HERO_FACTS = [
  {
    icon: Briefcase,
    tone: "indigo",
    title: {
      es: "Experiencia reciente",
      en: "Recent experience",
    },
  },
  {
    icon: Globe2,
    tone: "cyan",
    title: {
      es: "Trabajo remoto",
      en: "Remote work",
    },
  },
  {
    icon: Languages,
    tone: "amber",
    title: {
      es: "Idiomas",
      en: "Languages",
    },
  },
]

function pick(copy, language) {
  if (copy && typeof copy === "object" && "es" in copy && "en" in copy) {
    return copy[language] ?? copy.es
  }

  return copy
}

function getTone(tone) {
  return TONES[tone] ?? TONES.cyan
}

function BulletList({ items, language, dotClassName = "bg-cyan-500 dark:bg-cyan-300", className }) {
  return (
    <ul className={cn("space-y-3 text-sm text-muted-foreground", className)}>
      {items.map((item) => (
        <li key={pick(item, language)} className="flex items-start gap-3">
          <span className={cn("mt-1.5 h-2 w-2 shrink-0 rounded-full", dotClassName)} aria-hidden="true" />
          <span>{pick(item, language)}</span>
        </li>
      ))}
    </ul>
  )
}

function QuickFact({ fact, meta, language }) {
  const tone = getTone(meta.tone)
  const Icon = meta.icon

  return (
    <li className={cn(`${tone.card} relative overflow-hidden rounded-[1.75rem] py-0 hover:translate-y-0`, "h-full")}>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent dark:via-white/20" aria-hidden="true" />
      <div className="flex h-full gap-4 px-5 py-5">
        <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border ${tone.subtle}`}>
          <Icon className={`h-5 w-5 ${tone.icon}`} aria-hidden="true" />
        </div>
        <div className="space-y-2">
          <p className={`text-[0.72rem] font-semibold uppercase tracking-[0.24em] ${tone.icon}`}>{pick(meta.title, language)}</p>
          <p className="text-sm leading-7 text-muted-foreground">{pick(fact, language)}</p>
        </div>
      </div>
    </li>
  )
}

function MetricsPanel({ items, language }) {
  return (
    <Card className="overflow-hidden border-white/65 bg-white/74 py-0 shadow-[0_24px_70px_-48px_rgba(15,23,42,0.5)] backdrop-blur-sm hover:translate-y-0 dark:border-white/10 dark:bg-white/[0.04]">
      <CardContent className="grid gap-0 px-0 md:grid-cols-3">
        {items.map((item, index) => {
          const tone = getTone(item.tone)

          return (
            <div
              key={pick(item.label, language)}
              className={cn(
                "space-y-2 px-6 py-5",
                item.tone === "indigo" && "bg-indigo-50/45 dark:bg-indigo-950/16",
                item.tone === "cyan" && "bg-cyan-50/45 dark:bg-cyan-950/16",
                item.tone === "emerald" && "bg-emerald-50/45 dark:bg-emerald-950/16",
                item.tone === "amber" && "bg-amber-50/45 dark:bg-amber-950/16",
                index < items.length - 1 && "border-b border-white/50 md:border-b-0 md:border-r dark:border-white/10",
              )}
            >
              <p className={`text-2xl font-semibold tracking-tight ${tone.icon}`}>{item.value}</p>
              <p className="text-sm leading-6 text-muted-foreground">{pick(item.label, language)}</p>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}

function StrengthCard({ item, language, className }) {
  const tone = getTone(item.tone)
  const Icon = ICONS[item.icon] ?? Code

  return (
    <Card className={cn(`${tone.card} h-full min-h-[15.5rem] rounded-[1.75rem]`, className)}>
      <CardHeader className="flex h-full flex-col items-center justify-center space-y-4 text-center">
        <div className={`flex h-11 w-11 items-center justify-center rounded-2xl border ${tone.subtle}`}>
          <Icon className={`h-5 w-5 ${tone.icon}`} aria-hidden="true" />
        </div>
        <div className="mx-auto max-w-[20rem] space-y-2">
          <CardTitle className="text-xl leading-tight">{pick(item.title, language)}</CardTitle>
          <CardDescription className="text-sm leading-7">{pick(item.description, language)}</CardDescription>
        </div>
      </CardHeader>
    </Card>
  )
}

function WorkflowCard({ item, index, language }) {
  return (
    <Card className="h-full rounded-[1.75rem] border-white/60 bg-white/72 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.05]">
      <CardHeader className="gap-3">
        <span className="font-mono text-sm text-cyan-700 dark:text-cyan-300">{String(index + 1).padStart(2, "0")}</span>
        <CardTitle className="text-lg">{pick(item.title, language)}</CardTitle>
        <CardDescription className="leading-6">{pick(item.description, language)}</CardDescription>
      </CardHeader>
    </Card>
  )
}

function ExperienceEntry({ item, language }) {
  const tone = getTone(item.tone)

  return (
    <article className="rounded-[2rem] border border-white/55 bg-white/66 p-5 shadow-[0_24px_70px_-48px_rgba(15,23,42,0.55)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_32px_90px_-54px_rgba(15,23,42,0.55)] dark:border-white/10 dark:bg-white/[0.04] lg:p-7">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] lg:gap-8">
        <div className="space-y-4 lg:border-r lg:border-white/40 lg:pr-7 dark:lg:border-white/10">
          <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${tone.badge}`}>
            {pick(item.meta, language)}
          </span>
          <div className="space-y-2">
            <h3 className={`text-2xl font-semibold tracking-tight ${tone.icon}`}>{pick(item.title, language)}</h3>
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-foreground/70">{item.company}</p>
          </div>
        </div>

        <div className="space-y-5">
          <p className="text-sm leading-7 text-muted-foreground">{pick(item.summary, language)}</p>
          <BulletList items={item.bullets} language={language} dotClassName={tone.dot} />
          <div className={`flex flex-wrap gap-2 ${tone.chips}`}>
            {item.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}

function CaseStudyCard({ study, language }) {
  const tone = getTone(study.tone)

  return (
    <Card className={`${tone.card} h-full rounded-[1.75rem]`}>
      <CardHeader className="space-y-4">
        <div className={`flex h-11 w-11 items-center justify-center rounded-2xl border ${tone.subtle}`}>
          <BarChart3 className={`h-5 w-5 ${tone.icon}`} aria-hidden="true" />
        </div>
        <div className="space-y-2">
          <CardTitle className="text-xl">{pick(study.title, language)}</CardTitle>
          <CardDescription className="text-sm leading-6 text-muted-foreground">
            {pick(study.problem, language)}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 text-sm text-muted-foreground">
        <p className="leading-7">
          <span className="font-semibold text-foreground">{language === "en" ? "Approach:" : "Enfoque:"}</span>{" "}
          {pick(study.action, language)}
        </p>
        <p className="leading-7">
          <span className="font-semibold text-foreground">{language === "en" ? "Outcome:" : "Resultado:"}</span>{" "}
          {pick(study.outcome, language)}
        </p>
        <div className={`flex flex-wrap gap-2 ${tone.chips}`}>
          {study.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function ProjectCard({ project, language }) {
  const tone = getTone(project.tone)

  return (
    <Card className={`${tone.card} h-full overflow-hidden rounded-[1.75rem]`}>
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-900">
        <Image
          src={project.image}
          alt={`${language === "en" ? "Preview of" : "Vista previa de"} ${pick(project.title, language)}`}
          fill
          sizes="(min-width: 1280px) 31vw, (min-width: 768px) 46vw, 100vw"
          quality={82}
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/40 to-transparent" aria-hidden="true" />
      </div>
      <CardHeader className="space-y-3">
        <CardTitle className="text-xl">{pick(project.title, language)}</CardTitle>
        <CardDescription className="leading-6">{pick(project.description, language)}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <BulletList items={project.highlights} language={language} dotClassName={tone.dot} />
        <div className={`flex flex-wrap gap-2 ${tone.chips}`}>
          {project.tech.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          <Button size="sm" className={tone.button} asChild>
            <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" aria-hidden="true" />
              {language === "en" ? "Code" : "C\u00f3digo"}
            </a>
          </Button>
          {project.demoUrl ? (
            <Button size="sm" variant="outline" className="rounded-full border-foreground/15 bg-background/60 hover:bg-foreground/5" asChild>
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                Demo
              </a>
            </Button>
          ) : null}
        </div>
      </CardContent>
    </Card>
  )
}

function SkillGroupCard({ group, language }) {
  const tone = getTone(group.tone)

  return (
    <Card className={`${tone.card} h-full rounded-[1.75rem]`}>
      <CardHeader className="space-y-3">
        <CardTitle className={`text-xl ${tone.icon}`}>{pick(group.title, language)}</CardTitle>
        <CardDescription className="leading-6">{pick(group.description, language)}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className={`flex flex-wrap gap-2 ${tone.chips}`}>
          {group.items.map((item) => (
            <Badge key={item} variant="outline">
              {item}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function ContactMethod({ href, icon: Icon, label, value, tone = "cyan" }) {
  const toneStyles = getTone(tone)
  const external = href.startsWith("http")

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`flex items-center gap-3 rounded-2xl border px-4 py-3 transition-colors hover:bg-white/80 dark:hover:bg-white/10 ${toneStyles.subtle}`}
    >
      <div className={`flex h-10 w-10 items-center justify-center rounded-xl border bg-white/80 dark:bg-slate-950/60 ${toneStyles.subtle}`}>
        <Icon className={`h-4 w-4 ${toneStyles.icon}`} aria-hidden="true" />
      </div>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">{label}</p>
        <p className="truncate text-sm font-medium text-foreground">{value}</p>
      </div>
    </a>
  )
}

function ProjectActions({ project, tone, language }) {
  return (
    <div className="flex flex-wrap gap-3">
      <Button size="sm" className={tone.button} asChild>
        <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
          <Github className="h-4 w-4" aria-hidden="true" />
          {language === "en" ? "Code" : "C\u00f3digo"}
        </a>
      </Button>
      {project.demoUrl ? (
        <Button
          size="sm"
          variant="outline"
          className="rounded-full border-foreground/15 bg-background/60 hover:bg-foreground/5"
          asChild
        >
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            Demo
          </a>
        </Button>
      ) : null}
    </div>
  )
}

function FeaturedProjectCard({ project, language }) {
  const tone = getTone(project.tone)

  return (
    <Card className={`${tone.card} overflow-hidden rounded-[2rem] py-0 hover:-translate-y-0.5 lg:grid lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)]`}>
      <div className="relative min-h-[280px] overflow-hidden bg-slate-100 dark:bg-slate-900">
        <Image
          src={project.image}
          alt={`${language === "en" ? "Preview of" : "Vista previa de"} ${pick(project.title, language)}`}
          fill
          sizes="(min-width: 1280px) 52vw, 100vw"
          quality={84}
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/30 via-slate-950/5 to-transparent" aria-hidden="true" />
        <div className="absolute left-5 top-5">
          <span className={`inline-flex rounded-full border px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.24em] ${tone.badge}`}>
            {language === "en" ? "Featured project" : "Proyecto destacado"}
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-6 p-6 lg:p-8">
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold tracking-tight">{pick(project.title, language)}</h3>
            <p className="text-sm leading-7 text-muted-foreground">{pick(project.description, language)}</p>
          </div>

          <BulletList items={project.highlights} language={language} dotClassName={tone.dot} className="leading-7" />

          <div className={`flex flex-wrap gap-2 ${tone.chips}`}>
            {project.tech.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <ProjectActions project={project} tone={tone} language={language} />
      </div>
    </Card>
  )
}

function SectionDividerLabel({ children }) {
  return (
    <div className="flex items-center gap-4">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" aria-hidden="true" />
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">{children}</p>
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" aria-hidden="true" />
    </div>
  )
}

export function PortfolioPage() {
  const { language } = useLanguage()
  const isEnglish = language === "en"
  const { hero, metrics, strengths, experience, featuredWork, skills, education, contact, footer } = portfolioContent
  const [featuredProject, ...secondaryProjects] = featuredWork.projects
  const currentYear = new Date().getFullYear()
  const fitCardTitles = [
    { es: "Productos frontend", en: "Frontend products" },
    { es: "Integraciones utiles", en: "Useful integrations" },
    { es: "Equipos con criterio", en: "Teams with standards" },
  ]

  return (
    <div className="relative isolate min-h-screen overflow-x-clip bg-background selection:bg-cyan-200 selection:text-cyan-950 dark:selection:bg-cyan-900/70 dark:selection:text-cyan-100">
      <VisualEffects />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.15),transparent_28%),radial-gradient(circle_at_top_right,rgba(6,182,212,0.16),transparent_26%),radial-gradient(circle_at_bottom,rgba(245,158,11,0.10),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.6),transparent_62%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_60%)]" />

      <div className="relative z-10">
        <a href="#contenido-principal" className="skip-link">
          {isEnglish ? "Skip to main content" : "Ir al contenido principal"}
        </a>

        <SiteHeader />

        <main id="contenido-principal">
          <section id="inicio" className="relative overflow-hidden pb-20 pt-[4.5rem] sm:pb-24 sm:pt-24 lg:pb-28 lg:pt-28">
            <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 md:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:items-stretch">
              <div className="flex h-full flex-col gap-10 lg:pr-3">
                <div className="space-y-5">
                  <span
                    className={`inline-flex w-fit items-center rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] ${getTone("cyan").badge}`}
                  >
                    {pick(hero.badge, language)}
                  </span>

                  <div className="space-y-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700 dark:text-cyan-300">
                      {pick(portfolioProfile.role, language)}
                    </p>
                    <h1 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[4rem] lg:leading-[1.02]">
                      {pick(hero.title, language)}
                    </h1>
                    <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                      {pick(hero.description, language)}
                    </p>
                  </div>
                </div>

                <div className="space-y-6 lg:mt-auto">
                  <div className="flex flex-wrap gap-3">
                    <Button size="lg" className={getTone("cyan").button} asChild>
                      <Link href="#proyectos">
                        <Rocket className="h-4 w-4" aria-hidden="true" />
                        {pick(hero.primaryCta, language)}
                      </Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="rounded-full border-foreground/15 bg-background/70 hover:bg-white/80 dark:hover:bg-white/10"
                      asChild
                    >
                      <Link href="#contacto">
                        <MessageSquare className="h-4 w-4" aria-hidden="true" />
                        {pick(hero.secondaryCta, language)}
                      </Link>
                    </Button>
                    <Button size="lg" variant="ghost" className="rounded-full hover:bg-white/70 dark:hover:bg-white/10" asChild>
                      <a href={portfolioProfile.resumeUrl} target="_blank" rel="noopener noreferrer">
                        <Download className="h-4 w-4" aria-hidden="true" />
                        {pick(hero.resumeCta, language)}
                      </a>
                    </Button>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-3 py-2 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.05]">
                      <MapPin className="h-4 w-4 text-amber-600 dark:text-amber-300" aria-hidden="true" />
                      {portfolioProfile.location}
                    </span>
                    <a
                      href={`mailto:${portfolioProfile.email}`}
                      className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-3 py-2 backdrop-blur-sm transition-colors hover:text-cyan-700 dark:border-white/10 dark:bg-white/[0.05] dark:hover:text-cyan-300"
                    >
                      <Mail className="h-4 w-4 text-cyan-600 dark:text-cyan-300" aria-hidden="true" />
                      {portfolioProfile.email}
                    </a>
                  </div>

                </div>
              </div>

              <div className="space-y-5" data-parallax="float" style={{ "--parallax-depth": "32px" }}>
                <Card className={`${getTone("indigo").card} relative overflow-hidden rounded-[2rem] py-0 hover:translate-y-0`}>
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/80 to-transparent" aria-hidden="true" />
                  <CardHeader className="space-y-5 pt-7">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-3">
                        <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] ${getTone("indigo").badge}`}>
                          {portfolioProfile.name}
                        </span>
                        <div className="space-y-2">
                          <p className="text-sm font-medium uppercase tracking-[0.26em] text-muted-foreground">
                            {pick(portfolioProfile.role, language)}
                          </p>
                          <CardTitle className="text-2xl leading-tight">{pick(hero.summaryCard.title, language)}</CardTitle>
                        </div>
                      </div>
                      <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${getTone("indigo").subtle}`}>
                        <Target className={`h-5 w-5 ${getTone("indigo").icon}`} aria-hidden="true" />
                      </div>
                    </div>
                    <CardDescription className="leading-7">{pick(hero.summaryCard.description, language)}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6 pb-7">
                    <BulletList
                      items={hero.summaryCard.bullets}
                      language={language}
                      dotClassName="bg-indigo-500 dark:bg-indigo-300"
                    />

                    <div className="grid gap-3 sm:grid-cols-2">
                      <a
                        href={portfolioProfile.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between rounded-2xl border border-white/60 bg-white/80 px-4 py-3 text-sm font-medium transition-colors hover:bg-white dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
                      >
                        <span className="inline-flex items-center gap-2">
                          <Github className="h-4 w-4 text-zinc-700 dark:text-zinc-200" aria-hidden="true" />
                          GitHub
                        </span>
                        <ExternalLink className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                      </a>
                      <a
                        href={portfolioProfile.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between rounded-2xl border border-white/60 bg-white/80 px-4 py-3 text-sm font-medium transition-colors hover:bg-white dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
                      >
                        <span className="inline-flex items-center gap-2">
                          <Linkedin className="h-4 w-4 text-cyan-700 dark:text-cyan-300" aria-hidden="true" />
                          LinkedIn
                        </span>
                        <ExternalLink className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <MetricsPanel items={metrics} language={language} />
              </div>
            </div>

            <div className="mx-auto mt-6 w-full max-w-6xl px-4 md:px-6">
              <ul className="grid gap-4 md:grid-cols-3">
                {hero.quickFacts.map((fact, index) => (
                  <QuickFact key={pick(fact, language)} fact={fact} meta={HERO_FACTS[index]} language={language} />
                ))}
              </ul>
            </div>
          </section>
          <section
            id="sobre-mi"
            className="py-20 sm:py-24"
            style={{ contentVisibility: "auto", containIntrinsicSize: "960px" }}
          >
            <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 md:px-6 xl:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] xl:items-start">
              <div className="flex flex-col gap-6 xl:pr-4">
                <SectionHeading
                  align="start"
                  badge={pick(strengths.badge, language)}
                  title={pick(strengths.title, language)}
                  description={pick(strengths.description, language)}
                  badgeClassName={getTone("amber").badge}
                />

                <Card className="max-w-[33rem] rounded-[1.75rem] border-white/60 bg-white/72 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.05]">
                  <CardHeader className="gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-200/70 bg-cyan-50/80 dark:border-cyan-900/60 dark:bg-cyan-950/30">
                      <Rocket className="h-5 w-5 text-cyan-600 dark:text-cyan-300" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-xl">{pick(strengths.workflowTitle, language)}</CardTitle>
                    <CardDescription className="leading-7">
                      {isEnglish
                        ? "I am most useful when a team needs someone who can understand the context, organize the work, and still execute with care."
                        : "Soy m\u00e1s \u00fatil cuando un equipo necesita a alguien que entienda el contexto, ordene el trabajo y adem\u00e1s ejecute con cuidado."}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>

              <div className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  {strengths.items.map((item, index) => (
                    <StrengthCard
                      key={pick(item.title, language)}
                      item={item}
                      language={language}
                      className={index === 0 ? "md:col-span-2 min-h-[13.5rem]" : "min-h-[16rem]"}
                    />
                  ))}
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  {strengths.workflow.map((item, index) => (
                    <WorkflowCard key={pick(item.title, language)} item={item} index={index} language={language} />
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section
            id="experiencia"
            className="bg-white/45 py-20 sm:py-24 dark:bg-white/[0.03]"
            style={{ contentVisibility: "auto", containIntrinsicSize: "1040px" }}
          >
            <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
              <SectionHeading
                badge={pick(experience.badge, language)}
                title={pick(experience.title, language)}
                description={pick(experience.description, language)}
                badgeClassName={getTone("emerald").badge}
              />

              <div className="mt-14 space-y-6">
                {experience.items.map((item) => (
                  <ExperienceEntry key={`${item.company}-${pick(item.title, language)}`} item={item} language={language} />
                ))}
              </div>
            </div>
          </section>
          <section
            id="proyectos"
            className="py-20 sm:py-24"
            style={{ contentVisibility: "auto", containIntrinsicSize: "1380px" }}
          >
            <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
              <SectionHeading
                badge={pick(featuredWork.badge, language)}
                title={pick(featuredWork.title, language)}
                description={pick(featuredWork.description, language)}
                badgeClassName={getTone("cyan").badge}
              />

              <div className="mt-14 space-y-6">
                <SectionDividerLabel>{isEnglish ? "Case studies" : "Casos"}</SectionDividerLabel>
                <div className="grid gap-6 lg:grid-cols-2">
                  {featuredWork.caseStudies.map((study) => (
                    <CaseStudyCard key={pick(study.title, language)} study={study} language={language} />
                  ))}
                </div>
              </div>

              {featuredProject ? (
                <div className="mt-10 space-y-6">
                  <SectionDividerLabel>{isEnglish ? "Highlighted build" : "Implementaci\u00f3n destacada"}</SectionDividerLabel>
                  <FeaturedProjectCard project={featuredProject} language={language} />
                </div>
              ) : null}

              {secondaryProjects.length > 0 ? (
                <div className="mt-10 space-y-6">
                  <SectionDividerLabel>{isEnglish ? "More builds" : "Otros proyectos"}</SectionDividerLabel>
                  <div className="grid gap-6 md:grid-cols-2">
                    {secondaryProjects.map((project) => (
                      <ProjectCard key={pick(project.title, language)} project={project} language={language} />
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </section>
          <section
            id="habilidades"
            className="bg-white/45 py-20 sm:py-24 dark:bg-white/[0.03]"
            style={{ contentVisibility: "auto", containIntrinsicSize: "960px" }}
          >
            <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
              <SectionHeading
                badge={pick(skills.badge, language)}
                title={pick(skills.title, language)}
                description={pick(skills.description, language)}
                badgeClassName={getTone("indigo").badge}
              />

              <div className="mt-14 grid gap-6 md:grid-cols-2">
                {skills.groups.map((group) => (
                  <SkillGroupCard key={pick(group.title, language)} group={group} language={language} />
                ))}
              </div>
            </div>
          </section>
          <section
            id="educacion"
            className="py-20 sm:py-24"
            style={{ contentVisibility: "auto", containIntrinsicSize: "920px" }}
          >
            <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
              <SectionHeading
                badge={pick(education.badge, language)}
                title={pick(education.title, language)}
                description={pick(education.description, language)}
                badgeClassName={getTone("amber").badge}
              />

              <div className="mt-14 grid gap-6 lg:grid-cols-[minmax(0,1.04fr)_minmax(0,0.96fr)]">
                <Card className={`${getTone("indigo").card} h-full rounded-[1.75rem]`}>
                  <CardHeader className="space-y-4">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-2xl border ${getTone("indigo").subtle}`}>
                      <Code className={`h-5 w-5 ${getTone("indigo").icon}`} aria-hidden="true" />
                    </div>
                    <div className="space-y-2">
                      <CardTitle className="text-2xl">{pick(education.degree.title, language)}</CardTitle>
                      <CardDescription>{pick(education.degree.meta, language)}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="flex h-full flex-col justify-between space-y-5 pt-1">
                    <p className="text-sm leading-7 text-muted-foreground">{pick(education.degree.description, language)}</p>
                    <div className={`grid gap-2 sm:grid-cols-2 ${getTone("indigo").chips}`}>
                      {education.degree.tags.map((tag) => (
                        <Badge key={pick(tag, language)} variant="outline">
                          {pick(tag, language)}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className={`${getTone("cyan").card} h-full rounded-[1.75rem]`}>
                  <CardHeader className="space-y-3">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-2xl border ${getTone("cyan").subtle}`}>
                      <Languages className={`h-5 w-5 ${getTone("cyan").icon}`} aria-hidden="true" />
                    </div>
                    <CardTitle className="text-xl">{pick(education.languages.title, language)}</CardTitle>
                    <CardDescription>{pick(education.languages.description, language)}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {education.languages.items.map((item) => (
                      <div
                        key={pick(item.name, language)}
                        className="rounded-[1.35rem] border border-cyan-200/70 bg-cyan-50/70 px-4 py-3 dark:border-cyan-900/60 dark:bg-cyan-950/25"
                      >
                        <p className="font-medium text-foreground">{pick(item.name, language)}</p>
                        <p className="text-sm text-muted-foreground">{pick(item.level, language)}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className={`${getTone("amber").card} rounded-[1.75rem] lg:col-span-2`}>
                  <CardHeader className="space-y-3">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-2xl border ${getTone("amber").subtle}`}>
                      <Briefcase className={`h-5 w-5 ${getTone("amber").icon}`} aria-hidden="true" />
                    </div>
                    <CardTitle className="text-xl">{pick(education.fit.title, language)}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 md:grid-cols-3">
                      {education.fit.items.map((item, index) => (
                        <div
                          key={pick(item, language)}
                          className="rounded-[1.35rem] border border-amber-200/70 bg-amber-50/70 px-4 py-4 dark:border-amber-900/60 dark:bg-amber-950/20"
                        >
                          <p className="text-base font-semibold tracking-tight text-foreground">
                            {pick(fitCardTitles[index], language)}
                          </p>
                          <p className="mt-2 text-sm leading-7 text-muted-foreground">
                            {pick(item, language)}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
          <section
            id="contacto"
            className="pb-24 pt-20 sm:pb-28 sm:pt-24"
            style={{ contentVisibility: "auto", containIntrinsicSize: "980px" }}
          >
            <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
              <SectionHeading
                badge={pick(contact.badge, language)}
                title={pick(contact.title, language)}
                description={pick(contact.description, language)}
                badgeClassName={getTone("emerald").badge}
              />

              <div className="mt-14 grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                <div className="space-y-6">
                  <Card className={`${getTone("emerald").card} rounded-[1.75rem] hover:translate-y-0`}>
                    <CardHeader className="space-y-3">
                      <CardTitle className="text-2xl">{pick(contact.detailsTitle, language)}</CardTitle>
                      <CardDescription className="leading-6">{pick(contact.detailsDescription, language)}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ContactMethod
                        href={`mailto:${portfolioProfile.email}`}
                        icon={Mail}
                        label="Email"
                        value={portfolioProfile.email}
                        tone="cyan"
                      />
                      <ContactMethod
                        href={`tel:${portfolioProfile.phone.replace(/\s+/g, "")}`}
                        icon={Phone}
                        label={isEnglish ? "Phone" : "Tel\u00e9fono"}
                        value={portfolioProfile.phone}
                        tone="emerald"
                      />
                      <ContactMethod
                        href={portfolioProfile.linkedinUrl}
                        icon={Linkedin}
                        label="LinkedIn"
                        value={isEnglish ? "Professional profile" : "Perfil profesional"}
                        tone="indigo"
                      />
                      <div className="grid gap-3 sm:grid-cols-2">
                        <Button variant="outline" className="rounded-full border-foreground/15 bg-background/70" asChild>
                          <a href={portfolioProfile.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" aria-hidden="true" />
                            GitHub
                          </a>
                        </Button>
                        <Button variant="outline" className="rounded-full border-foreground/15 bg-background/70" asChild>
                          <a href={portfolioProfile.resumeUrl} target="_blank" rel="noopener noreferrer">
                            <Download className="h-4 w-4" aria-hidden="true" />
                            {pick(hero.resumeCta, language)}
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="rounded-[1.75rem] border-white/60 bg-white/72 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.05]">
                    <CardHeader className="space-y-3">
                      <CardTitle className="text-xl">{isEnglish ? "Common conversations" : "Conversaciones frecuentes"}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {contact.checklist.map((item) => (
                        <div
                          key={pick(item, language)}
                          className="rounded-[1.35rem] border border-white/70 bg-white/85 px-4 py-3 text-sm text-muted-foreground dark:border-white/10 dark:bg-white/5"
                        >
                          {pick(item, language)}
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>

                <Card className={`${getTone("cyan").card} rounded-[1.75rem] hover:translate-y-0`}>
                  <CardHeader className="space-y-3">
                    <CardTitle className="text-2xl">{pick(contact.formTitle, language)}</CardTitle>
                    <CardDescription className="leading-6">{pick(contact.formDescription, language)}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ContactForm />
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-white/40 bg-white/40 py-6 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.03]">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center md:flex-row md:px-6 md:text-left">
            <div className="flex items-center gap-3">
              <Code className="h-5 w-5 text-indigo-600 dark:text-indigo-300" aria-hidden="true" />
              <p className="text-sm text-muted-foreground">
                {`© ${currentYear} ${portfolioProfile.name}.`} {pick(footer.line, language)}
              </p>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/45 bg-white/60 px-2 py-1 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.04]">
              <Button variant="ghost" size="icon" className="rounded-full" asChild>
                <a href={portfolioProfile.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full" asChild>
                <a href={portfolioProfile.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full" asChild>
                <a href={`mailto:${portfolioProfile.email}`} aria-label="Email">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
