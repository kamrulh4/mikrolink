import { Globe } from "lucide-react"

export function Header() {
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
            <a
              className="font-medium text-muted-foreground text-sm transition-colors hover:text-foreground"
              href="#features"
            >
              Features
            </a>
            <a
              className="font-medium text-muted-foreground text-sm transition-colors hover:text-foreground"
              href="#pricing"
            >
              Pricing
            </a>
            <a
              className="font-medium text-muted-foreground text-sm transition-colors hover:text-foreground"
              href="#contact"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
