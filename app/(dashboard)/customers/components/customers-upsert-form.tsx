import { zodResolver } from "@hookform/resolvers/zod"
import { Loader } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

import { useCustomersStore } from "@/stores/customers-store"

const formSchema = z.object({
  name: z.string().min(2).max(50),
})

export function CustomersUpsertForm() {
  const { customerMutationType } = useCustomersStore()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      // title: selectedDocument.title || "",
      // filePath: selectedDocument.filePath || "",
      // thumbnail: selectedDocument.thumbnail || "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (customerMutationType === "add") {
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
