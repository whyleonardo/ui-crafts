"use client"

import { useState } from "react"

import { ComponentContainer } from "@/components/component-container"

import { cn } from "@/lib/utils"

export const TABS = ["Angular", "React", "Vue", "Svelte", "Solid"]

export const MagneticTabs = () => {
  return (
    <ComponentContainer componentLabel="Magnetic Tabs">
      <div className="flex">
        {TABS.map((tab) => (
          <Tab key={tab} label={tab} />
        ))}
      </div>
    </ComponentContainer>
  )
}

const Tab = ({ label }: { label: string }) => {
  const [selected, setSelected] = useState(false)

  return (
    <button
      type="button"
      id="tab-filter"
      onClick={() => setSelected((state) => !state)}
      data-selected={selected}
      className={cn(
        "relative size-fit cursor-pointer rounded-2xl border px-3 py-1.5 text-sm font-medium transition-all duration-75 last-of-type:hidden last-of-type:sm:inline"
      )}
    >
      {label}
    </button>
  )
}
