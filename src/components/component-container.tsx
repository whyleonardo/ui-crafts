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
      <span className="text-muted-foreground ~sm/md:~text-lg/xl hidden pl-4 font-mono">
        {componentLabel}
      </span>
      <div
        ref={ref}
        className={cn(
          "inset-shadow-sm inset-shadow-foreground/5 flex h-full items-center justify-center rounded-3xl border bg-neutral-100 p-5 dark:bg-neutral-900",
          className
        )}
      >
        {children}
      </div>
    </div>
  )
})

ComponentContainer.displayName = "ComponentContainer"
