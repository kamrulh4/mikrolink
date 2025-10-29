import { Separator } from "@/components/ui/separator"
import { ChangePasswordForm } from "./password-form"
import { ProfileForm } from "./profile-form"

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Profile</h3>
        <p className="text-sm text-muted-foreground">
          Manage your account settings and change your credentials.
        </p>
      </div>
      <Separator />

      <div className="grid gap-6">
        <ProfileForm />
        <ChangePasswordForm />
      </div>
    </div>
  )
}
