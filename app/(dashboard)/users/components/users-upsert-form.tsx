import { zodResolver } from "@hookform/resolvers/zod"
import { Loader } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod/v3"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useCreateUser, useUpdateUser } from "@/hooks/rq/use-users-query"
import { cn } from "@/lib/utils"
import { useUsersStore } from "@/stores/users-store"

const formSchema = z.object({
  first_name: z.string().min(1, "First name is required").max(50),
  last_name: z.string().max(50).optional(),
  email: z.string().email("Invalid email").optional(),
  phone: z.string().max(20).optional(),
  gender: z.string().optional(),
  kind: z.string().optional(),
  image: z.string().optional(),
})

export function UsersUpsertForm() {
  const { setIsUpsertUserDialogOpen, userMutationType, selectedUser } = useUsersStore()
  const { mutate: triggerCreateUser, isPending: isCreateUserPending } = useCreateUser()
  const { mutate: triggerUpdateUser, isPending: isUpdateUserPending } = useUpdateUser()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: selectedUser?.first_name || "",
      last_name: selectedUser?.last_name || "",
      email: selectedUser?.email || "",
      phone: selectedUser?.phone || "",
      gender: selectedUser?.gender || "",
      kind: selectedUser?.kind || "",
      image: selectedUser?.image || "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (userMutationType === "edit" && selectedUser?.uid) {
      triggerUpdateUser(
        { payload: values, uid: selectedUser.uid },
        {
          onSuccess: () => setIsUpsertUserDialogOpen(false),
        },
      )
      return
    }
    triggerCreateUser(values, {
      onSuccess: () => setIsUpsertUserDialogOpen(false),
    })
  }

  return (
    <section>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="first_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  First Name<span className="text-red-500 -ml-1.5">*</span>
                </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="last_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gender</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="kind"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Kind</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsUpsertUserDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              loading={isCreateUserPending || isUpdateUserPending}
              disabled={isCreateUserPending || isUpdateUserPending}
            >
              {userMutationType === "edit" ? "Update User" : "Create User"}
            </Button>
          </div>
        </form>
      </Form>
    </section>
  )
}
