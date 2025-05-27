"use client"

import { useState } from "react"

import { SignInButton, SignInIcon } from "./crafts/sign-in-button"
import { Icons } from "./icons"

export const SignInDemo = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isSignedIn, setIsSignedIn] = useState(false)

  const handleSignIn = () => {
    setIsLoading(true)

    setTimeout(() => {
      setIsSignedIn(true)
      setIsLoading(false)
    }, 2000)
  }

  return (
    <div className="flex flex-col gap-2">
      <SignInButton
        size="lg"
        onClick={handleSignIn}
        disabled={isLoading}
        isSuccess={isSignedIn}
        variant="outline"
      >
        <SignInIcon icon={Icons.google} />
        Sign in with Google
      </SignInButton>
    </div>
  )
}
