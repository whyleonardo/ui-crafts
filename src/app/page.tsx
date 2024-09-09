import { ComponentContainer } from "@/components/component-container"
import { MagneticTabs } from "@/components/crafts/magnetic-tabs"
import { ThemeToggle } from "@/components/theme-toggle"

export default function IndexPage() {
  return (
    <div className="grid h-dvh place-items-center">
      <div className="absolute right-16 top-4">
        <ThemeToggle />
      </div>

      <main className="flex w-full flex-col items-center gap-2 text-xl">
        <ComponentContainer componentLabel={"Magnetic Tabs"}>
          <MagneticTabs />
        </ComponentContainer>
      </main>
    </div>
  )
}
