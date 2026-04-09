import { cn } from "@/lib/utils"

export function SectionHeading({
  badge,
  title,
  description,
  align = "center",
  badgeClassName,
  className,
}) {
  const isStart = align === "start"

  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        isStart ? "items-start text-left" : "items-center text-center",
        className,
      )}
    >
      <div className={cn("flex items-center gap-3", isStart ? "justify-start" : "justify-center")}>
        <span className="h-px w-12 bg-gradient-to-r from-cyan-500/70 to-indigo-500/70" aria-hidden="true" />
        <span
          className={cn(
            "inline-flex w-fit items-center rounded-full border px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.24em]",
            badgeClassName,
          )}
        >
          {badge}
        </span>
      </div>
      <div className="space-y-3.5">
        <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.7rem]">{title}</h2>
        <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">{description}</p>
      </div>
    </div>
  )
}
