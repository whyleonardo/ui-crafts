"use client"

import { type ReactNode, useState } from "react"

import { ComponentContainer } from "@/components/component-container"

import { cn } from "@/lib/utils"

import { cva } from "class-variance-authority"
import { GitCommitHorizontal } from "lucide-react"
import { AnimatePresence, type Transition, motion } from "motion/react"

const buttonVariant = cva(
  "rounded-md bg-rose-950/50 px-2 py-px text-rose-500 transition-all duration-300 group-hover:bg-rose-950 cursor-pointer z-10 relative",
  {
    variants: {
      variant: {
        failed: "bg-rose-950/50 text-rose-500",
        success: "bg-emerald-950/50 text-emerald-500",
        default: "bg-muted-foreground/10 text-background"
      }
    }
  }
)

type Status = "failed" | "success"

type Commit = {
  hash: string
  status: Status
}

const commitData: Commit = {
  hash: "2e860de",
  status: "failed"
}

const springLayout: Transition = {
  type: "spring",
  duration: 0.42,
  bounce: 0.22
}

export const ActionToolbar = () => {
  const [commit, setCommit] = useState<Commit>(commitData)

  const [expanded, setExpanded] = useState(false)
  const [details, setDetails] = useState(false)

  return (
    <ComponentContainer componentLabel="Draggable Widget" className="relative">
      <Container className={cn(details && "h-fit")}>
        {details && (
          <motion.div className="mb-2 flex w-full flex-1 flex-col items-center justify-between rounded-lg">
            <div className="flex w-full items-center justify-between">
              <span>Branch toolbar v2</span>
              <span>2s ago</span>
            </div>

            <div className="bg-muted-foreground/15 text-muted mt-4 w-full rounded-md py-2 text-center">
              Deployed on <span className="text-emerald-400">landing-page</span>{" "}
              - Preview environment
            </div>
          </motion.div>
        )}

        <motion.div
          transition={{
            layout: springLayout
          }}
          layout
          className="flex w-full items-center justify-between gap-2 self-end"
        >
          <button
            onClick={() => {
              setExpanded(!expanded)
              setDetails(false)
            }}
            type="button"
            className="flex cursor-pointer items-center gap-2"
          >
            <GitCommitHorizontal
              className={cn(
                "min-w-6",
                commit.status === "failed" && "text-rose-500",
                commit.status === "success" && "text-emerald-500"
              )}
            />

            <span className="text-muted/85 group-hover:text-muted transition-all duration-150">
              {commit.hash}
            </span>

            {expanded && (
              <AnimatePresence>
                <motion.div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, transform: "scale(0.8)" }}
                  animate={{ opacity: 1, transform: "scale(1)" }}
                  exit={{ opacity: 0, transform: "scale(0.8)" }}
                  transition={{ duration: 0.15 }}
                >
                  <span className="text-md text-white/30">·</span>

                  <span>
                    {commit.status === "failed"
                      ? "Failed to compile"
                      : "Successfully redeployed "}
                  </span>
                </motion.div>
              </AnimatePresence>
            )}
          </button>

          <button
            type="button"
            onClick={
              expanded
                ? () => {
                    setDetails(!details)
                    setCommit((old) => ({ ...old, status: "success" }))
                  }
                : () => setExpanded(!expanded)
            }
            className={cn(
              buttonVariant({
                variant:
                  expanded && commit.status === "failed"
                    ? "default"
                    : commit.status
              })
            )}
          >
            {commit.status === "failed"
              ? expanded
                ? "Redeploy"
                : "Failed"
              : null}

            {commit.status === "success" && "Deployed"}
          </button>
        </motion.div>
      </Container>
    </ComponentContainer>
  )
}

const Container = ({
  children,
  className
}: {
  children: ReactNode
  className: string
}) => {
  return (
    <motion.div
      transition={{
        layout: springLayout
      }}
      layout
      className={cn(
        "bg-foreground text-background flex flex-col items-center justify-between gap-2 overflow-hidden rounded-xl p-2.5 text-xs select-none",
        className
      )}
    >
      {children}
    </motion.div>
  )
}
