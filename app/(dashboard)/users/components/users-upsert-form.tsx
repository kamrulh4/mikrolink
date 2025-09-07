import { zodResolver } from "@hookform/resolvers/zod"
import { Loader } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"
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

import { cn } from "@/lib/utils"

import { useUsersStore } from "@/stores/users-store"

const formSchema = z.object({
  name: z.string().min(2).max(50),
})

export function UsersUpsertForm() {
  const { userMutationType } = useUsersStore()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      // title: selectedDocument.title || "",
      // filePath: selectedDocument.filePath || "",
      // thumbnail: selectedDocument.thumbnail || "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (userMutationType === "add") {
      return
    }
  }

  return (
    <section>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Name<span className="text-red-500 -ml-1.5">*</span>
                </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">
            <Loader
              className={cn(
                "animate-spin hidden",
                // (isAddDucumentPending || isPatchDocumentPending) && "inline-block",
              )}
            />{" "}
            Submit
          </Button>
        </form>
      </Form>
    </section>
  )
}
