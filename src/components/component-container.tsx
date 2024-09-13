import { type ReactNode, forwardRef } from "react"

import { cn } from "@/lib/utils"

interface ComponentContainerProps {
  children: ReactNode
  componentLabel: string
  className?: string
}

export const ComponentContainer = forwardRef<
  HTMLDivElement,
  ComponentContainerProps
>(({ children, componentLabel, className }, ref) => {
  return (
    <div className="flex h-72 w-full flex-col gap-2 sm:h-[350px] md:h-[360px]">
      <span className="hidden pl-4 font-mono text-muted-foreground ~sm/md:~text-lg/xl">
        {componentLabel}
      </span>
      <div
        ref={ref}
        className={cn(
          "flex h-full items-center justify-center rounded-3xl border bg-neutral-100 p-5 shadow-[inset_0px_0px_1px_0_rgb(255_255_255/0.025)] dark:bg-neutral-900",
          className
        )}
      >
        {children}
      </div>
    </div>
  )
})

ComponentContainer.displayName = "ComponentContainer"
