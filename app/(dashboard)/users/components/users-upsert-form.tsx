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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useCreateUser, useUpdateUser } from "@/hooks/rq/use-users-query"
import { useUsersStore } from "@/stores/users-store"
import { genders, kinds } from "../data/data"

const formSchema = z.object({
  phone: z.string().max(20),
  email: z.string().email("Enter valid email"),

  first_name: z.string().max(50).optional(),
  last_name: z.string().max(50).optional(),
  gender: z.string().optional(),
  kind: z.string().optional(),
  // image: z.string().optional(),
})

export function UsersUpsertForm() {
  const { setIsUpsertUserDialogOpen, userMutationType, selectedUser } = useUsersStore()
  const { mutate: triggerCreateUser, isPending: isCreateUserPending } = useCreateUser()
  const { mutate: triggerUpdateUser, isPending: isUpdateUserPending } = useUpdateUser()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: selectedUser?.first_name,
      last_name: selectedUser?.last_name,
      email: selectedUser?.email,
      phone: selectedUser.phone,
      gender: selectedUser?.gender,
      kind: selectedUser?.kind,
      // image: selectedUser?.image,
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
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Phone<span className="text-red-500">*</span>{" "}
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
            name="first_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
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
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gender</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {genders.map((g) => (
                      <SelectItem key={g.value} value={g.value}>
                        <g.icon className="mr-2 h-4 w-4 inline-block" /> {g.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select kind" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {kinds
                      .filter((kind) => !["SUPER_ADMIN", "ADMIN"].includes(kind.value))
                      .map((k) => (
                        <SelectItem key={k.value} value={k.value}>
                          <k.icon className="mr-2 h-4 w-4 inline-block" /> {k.label}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* <FormField
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
          /> */}

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
