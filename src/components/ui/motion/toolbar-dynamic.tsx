"use client"

import { type ChangeEvent, type ReactNode, useRef, useState } from "react"

import { useClickOutside } from "@/hooks/use-click-outside"

import { MotionConfig, type Transition, motion } from "framer-motion"
import { ArrowLeft, Search } from "lucide-react"

const transition = {
  type: "spring",
  bounce: 0.2,
  duration: 0.4
} as Transition

const Button = ({
  children,
  onClick,
  disabled,
  ariaLabel
}: {
  children: ReactNode
  onClick?: () => void
  disabled?: boolean
  ariaLabel?: string
}) => {
  return (
    <button
      className="relative flex h-9 w-9 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-800 focus-visible:ring-2 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50"
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}

interface ToolbarDynamicProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  resetValue: () => void
  value: string
}

export const ToolbarDynamic = ({
  onChange,
  value,
  resetValue
}: ToolbarDynamicProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useClickOutside(containerRef, () => {
    setIsOpen(false)
    resetValue()
  })

  return (
    <MotionConfig transition={transition}>
      <div ref={containerRef}>
        <div className="w- h-full w-full rounded-xl border border-neutral-950/10 bg-white">
          <motion.div
            animate={{
              // @todo: here I want to remove the width
              width: isOpen ? "16rem" : "44px"
            }}
            initial={false}
          >
            <div className="overflow-hidden p-1">
              {!isOpen ? (
                <div className="flex">
                  <Button
                    onClick={() => setIsOpen(true)}
                    ariaLabel="Search text"
                  >
                    <Search className="h-5 w-5" />
                  </Button>
                </div>
              ) : (
                <motion.div className="flex space-x-2 overflow-hidden">
                  <Button onClick={() => setIsOpen(false)} ariaLabel="Back">
                    <ArrowLeft className="h-5 w-5" />
                  </Button>

                  <div className="relative w-full">
                    <input
                      onChange={onChange}
                      value={value}
                      className="h-9 w-full rounded-xl border border-neutral-950/10 bg-transparent p-2 text-base text-neutral-900 placeholder-neutral-500 placeholder:text-base focus:outline-none"
                      placeholder="Search text"
                      autoFocus
                    />
                    <div className="absolute right-1 top-0 flex h-full items-center justify-center" />
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </MotionConfig>
  )
}
