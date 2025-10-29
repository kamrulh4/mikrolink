"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useSuspenseSession } from "@/hooks/rq/use-auth-query"
import { generateAvatarUrl } from "@/lib/utils"

export default function ProfileHeader() {
  const { data: session } = useSuspenseSession()
  const fullName = session ? `${session.first_name} ${session.last_name}` : ""
  const initials = fullName
    .split(" ")
    .map((n: string) => n[0])
    .join("")
    .toUpperCase()

  return (
    <div className="flex items-center gap-x-6">
      <Avatar className="h-20 w-20">
        <AvatarImage src={generateAvatarUrl(fullName)} />
        <AvatarFallback className="text-lg">{initials}</AvatarFallback>
      </Avatar>
      <div>
        <h3 className="text-2xl font-semibold mb-1">{fullName}</h3>
        <p className="text-sm text-muted-foreground">{session.email}</p>
        <p className="text-sm text-muted-foreground">
          Manage your account settings and security preferences
        </p>
      </div>
    </div>
  )
}
