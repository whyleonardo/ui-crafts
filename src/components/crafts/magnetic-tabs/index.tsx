"use client"

import { useState } from "react"

export const TABS = ["Angular", "React", "Vue", "Svelte", "Solid"]

export const MagneticTabs = () => {
  return (
    <div className="flex">
      {TABS.map((tab) => (
        <Tab key={tab} label={tab} />
      ))}
    </div>
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
      className="relative size-fit rounded-2xl border px-4 py-2 text-sm font-medium transition-all duration-75"
    >
      {label}
    </button>
  )
}
