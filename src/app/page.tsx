import { DraggableWidget } from "@/components/crafts/draggable-widget"
import { MagneticTabs } from "@/components/crafts/magnetic-tabs"
import { ThemeToggle } from "@/components/theme-toggle"

import { PuzzleIcon } from "lucide-react"

export default function IndexPage() {
  return (
    <div className="mx-auto flex flex-col gap-8 py-4 md:max-w-3xl">
      <header className="sticky top-4 z-50 flex h-14 w-full items-center justify-between px-4 md:px-0">
        <PuzzleIcon className="text-neutral-600 transition-colors dark:text-neutral-400" />
        <ThemeToggle />
      </header>

      <main className="mx-auto flex w-full max-w-xl flex-col items-center gap-8 text-xl">
        <DraggableWidget />

        <MagneticTabs />
      </main>
    </div>
  )
}
