import {
  OrganizationSwitcher,
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs"

import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <main className="flex min-h-svh items-start justify-start p-6">
      <Show when="signed-in">
        <div className="flex flex-col items-start gap-4">
          <UserButton />
          <OrganizationSwitcher />
        </div>
      </Show>
      <Show when="signed-out">
        <div className="flex items-center gap-2">
          <SignInButton>
            <Button variant="ghost">Sign in</Button>
          </SignInButton>
          <SignUpButton>
            <Button>Sign up</Button>
          </SignUpButton>
        </div>
      </Show>
    </main>
  )
}
