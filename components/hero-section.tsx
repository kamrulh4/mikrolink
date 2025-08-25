import { LoginForm } from "@/components/login-form"
import { FeatureGrid } from "@/components/feature-grid"

export function HeroSection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
                Manage Your <span className="text-primary font-serif">Internet Users</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Efficiently manage internet subscribers, monitor usage, handle billing, and provide seamless
                connectivity. Professional tools for modern internet service providers.
              </p>
            </div>

            <FeatureGrid />
          </div>

          <div className="flex justify-center lg:justify-end">
            <LoginForm />
          </div>
        </div>
      </div>
    </section>
  )
}
