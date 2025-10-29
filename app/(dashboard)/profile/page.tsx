import { KeyRound, UserCircle } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProfileHeader from "./header"
import { ChangePasswordForm } from "./password-form"
import { ProfileForm } from "./profile-form"

export default function ProfilePage() {
  return (
    <div>
      <ProfileHeader />
      <div className="container max-w-md py-6">
        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="profile" className="flex items-center gap-x-2">
              <UserCircle className="h-4 w-4" />
              Profile Information
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center gap-x-2">
              <KeyRound className="h-4 w-4" />
              Security
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            <ProfileForm />
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <ChangePasswordForm />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
