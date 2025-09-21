import { Globe } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getSession } from "@/lib/apis/auth"

export async function Header() {
  const session = await getSession()

  return (
    <header className="border-border border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Globe className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-semibold text-foreground text-lg">Mikrolink</span>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            {session ? (
              <Link
                className="font-medium text-muted-foreground text-sm transition-colors hover:text-foreground"
                href="/dashboard"
              >
                {session.email}
              </Link>
            ) : (
              <>
                <Link
                  className="font-medium text-muted-foreground text-sm transition-colors hover:text-foreground"
                  href="/login"
                >
                  Login
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  )
}
