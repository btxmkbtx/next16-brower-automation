import { auth } from "@clerk/nextjs/server"

export default async function TestPage() {
  await auth.protect()

  return (
    <main className="flex min-h-svh items-center justify-center p-6">
      <div className="max-w-md space-y-2 text-center">
        <h1 className="text-2xl font-medium">Protected test page</h1>
        <p className="text-sm text-muted-foreground">
          If you can see this page, Clerk allowed the request.
        </p>
      </div>
    </main>
  )
}
