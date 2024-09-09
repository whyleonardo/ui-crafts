import type { ReactNode } from "react"

interface ComponentContainerProps {
  children: ReactNode
  componentLabel: string
}

export const ComponentContainer = ({
  children,
  componentLabel
}: ComponentContainerProps) => {
  return (
    <div className="flex h-72 w-full flex-col gap-2 sm:h-[350px] md:h-[460px] md:max-w-3xl">
      <span className="pl-4 font-mono text-muted-foreground ~sm/md:~text-xl/2xl">
        {componentLabel}
      </span>
      <div className="flex h-full items-center justify-center rounded-3xl border bg-neutral-100 shadow-[inset_0px_0px_1px_0_rgb(255_255_255/0.025)] dark:bg-neutral-900">
        {children}
      </div>
    </div>
  )
}
