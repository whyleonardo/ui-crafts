import type { ReactNode } from "react"
import type React from "react"

import { Button, type ButtonProps } from "@/components/ui/button"

import { cn } from "@/lib/utils"

import { CheckIcon, Loader2 } from "lucide-react"

interface RootProps extends ButtonProps {
  children: ReactNode
  className?: string
  isSuccess?: boolean
}

interface SignInButtonIconProps {
  className?: string
  icon: React.FC<React.SVGProps<SVGSVGElement>>
}

const SignInButton = ({
  onClick,
  className,
  disabled,
  isSuccess,
  ...props
}: RootProps) => {
  return (
    <Button
      data-success={isSuccess}
      data-loading={disabled}
      onClick={onClick}
      className={cn("group overflow-hidden", className)}
      disabled={disabled}
      {...props}
    />
  )
}

const SignInIcon = ({ icon: Icon, className }: SignInButtonIconProps) => {
  return (
    <div className="relative me-4">
      <Icon
        aria-hidden={true}
        className={cn(
          "transition-transform group-data-[loading=true]:-translate-y-8",
          "group-data-[success=true]:-translate-y-8",

          className
        )}
      />

      <CheckIcon className="text-success absolute top-0 left-0 size-4 scale-0 transition-transform duration-300 group-data-[success=true]:scale-100" />

      <div
        className={cn(
          "absolute top-0 left-0 translate-y-8 transition-transform",
          "group-data-[loading=true]:translate-y-0 group-data-[success=true]:opacity-0"
        )}
      >
        <Loader2 className="size-4 animate-spin" />
      </div>
    </div>
  )
}

export { SignInButton, SignInIcon }
