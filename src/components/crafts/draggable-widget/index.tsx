"use client"

import { type ChangeEvent, useCallback, useMemo, useRef, useState } from "react"

import { ComponentContainer } from "@/components/component-container"
import { ToolbarDynamic } from "@/components/ui/motion/toolbar-dynamic"

import { motion } from "motion/react"

const textContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida id dolor vel sagittis. Nullam sed odio non turpis facilisis laoreet. Sed interdum sem cursus diam blandit, eget cursus sem facilisis. Nullam vitae cursus odio, ac lacinia tortor."

export const DraggableWidget = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearchChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value)
    },
    []
  )

  const resetSearchTerm = useCallback(() => {
    setSearchTerm("")
  }, [])

  const highlightedText = useMemo(() => {
    if (searchTerm.trim()) {
      const escapedSearchTerm = searchTerm.replace(
        /[.*+?^${}()|[\]\\]/g,
        "\\$&"
      )
      const terms = escapedSearchTerm
        .split(/\s+/)
        .filter((term) => term.length > 0)

      const regex = new RegExp(`(${terms.join("|")})`, "gi")

      return textContent.replace(regex, "<mark>$1</mark>")
    }
    return textContent
  }, [searchTerm])

  return (
    <ComponentContainer
      ref={containerRef}
      componentLabel="Draggable Widget"
      className="relative"
    >
      <motion.div
        drag
        dragConstraints={containerRef}
        className="absolute left-4 top-4"
      >
        <ToolbarDynamic
          onChange={handleSearchChange}
          resetValue={resetSearchTerm}
          value={searchTerm}
        />
      </motion.div>

      <p
        className="text-muted-foreground max-w-lg text-center text-base leading-6"
        dangerouslySetInnerHTML={{ __html: highlightedText }}
      />
    </ComponentContainer>
  )
}
