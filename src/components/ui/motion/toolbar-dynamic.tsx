"use client"

import { type ChangeEvent, type RefObject, useRef, useState } from "react"

import { Button } from "@/components/ui/button"

import { useClickOutside } from "@/hooks/use-click-outside"

import { ArrowLeft, Search } from "lucide-react"
import { MotionConfig, type Transition, motion } from "motion/react"

const transition = {
  type: "spring",
  bounce: 0.2,
  duration: 0.4
} as Transition

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

  useClickOutside(containerRef as RefObject<HTMLDivElement>, () => {
    setIsOpen(false)
    resetValue()
  })

  return (
    <MotionConfig transition={transition}>
      <div ref={containerRef}>
        <div className="bg-background size-full rounded-xl border">
          <motion.div
            animate={{
              width: isOpen ? "16rem" : "44px"
            }}
            initial={false}
          >
            <div className="overflow-hidden p-1">
              {!isOpen ? (
                <div className="flex">
                  <Button
                    variant="unset"
                    className="group min-h-9 w-full min-w-9 focus-visible:ring-0"
                    size="icon"
                    onClick={() => setIsOpen(true)}
                    aria-label="Search text"
                  >
                    <Search className="text-muted-foreground size-5 transition group-hover:scale-110" />
                  </Button>
                </div>
              ) : (
                <motion.div className="flex space-x-2 overflow-hidden">
                  <Button
                    onClick={() => setIsOpen(false)}
                    variant="unset"
                    className="group min-h-9 min-w-9 focus-visible:ring-0"
                    size="icon"
                    aria-label="Back"
                  >
                    <ArrowLeft className="text-muted-foreground size-5 transition group-hover:scale-110" />
                  </Button>

                  <div className="relative w-full">
                    <input
                      onChange={onChange}
                      value={value}
                      className="border-muted text-muted-foreground placeholder-muted-foreground h-9 w-full rounded-lg bg-transparent p-2 text-base placeholder:text-base focus:outline-hidden"
                      placeholder="Search text"
                      autoFocus
                    />
                    <div className="absolute top-0 right-1 flex h-full items-center justify-center" />
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
