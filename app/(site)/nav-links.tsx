import { cookies } from "next/headers"
import Link from "next/link"
import { getSession } from "@/lib/apis/auth"

export async function NavLinks() {
  const session = await getSession()

  return (
    <nav className="hidden items-center gap-8 md:flex">
      {session ? (
        <Link
          className="font-medium text-muted-foreground text-sm transition-colors hover:text-foreground"
          href="/dashboard"
        >
          {session.email}
        </Link>
      ) : (
        <Link
          className="font-medium text-muted-foreground text-sm transition-colors hover:text-foreground"
          href="/login"
        >
          Login
        </Link>
      )}
    </nav>
  )
}
