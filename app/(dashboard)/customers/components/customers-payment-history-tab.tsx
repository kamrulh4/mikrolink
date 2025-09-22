import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import z from "zod"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
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
import { months, paymentMethods } from "../../payments/data/data"

const formSchema = z.object({
  billingMonth: z.string().min(1, "Billing Month is required"),
  paymentMethod: z.string().min(1, "Payment Method is required"),
  amount: z.string(),
  markAsPaid: z.boolean(),
})

export function CustomersPaymentHistoryTab() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      billingMonth: "",
      paymentMethod: "",
      amount: undefined,
      markAsPaid: false,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex-1 rounded-lg border bg-card text-card-foreground shadow-sm p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-block">🧾</span>
          <span className="font-semibold text-lg">Payment History</span>
        </div>
        <span className="text-sm text-muted-foreground mb-2 block">
          Recent payment transactions
        </span>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="py-2 text-left">Date</th>
              <th className="py-2 text-left">Month</th>
              <th className="py-2 text-left">Amount</th>
              <th className="py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {/* Replace with dynamic payment history */}
            <tr>
              <td className="py-2">Sep 21, 2025</td>
              <td className="py-2">SEPTEMBER</td>
              <td className="py-2">BDT 0.00</td>
              <td className="py-2">
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">
                  Pending
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="w-full md:max-w-xs rounded-lg border bg-card text-card-foreground shadow-sm p-4">
        <div className="font-semibold text-lg mb-2">Quick Actions</div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="billingMonth"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Billing Month</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Month" />
                      </SelectTrigger>
                      <SelectContent>
                        {months.map((m) => (
                          <SelectItem key={m.value} value={m.value}>
                            <m.icon className="mr-2 h-4 w-4 inline-block" /> {m.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="paymentMethod"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Payment Method</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Method" />
                      </SelectTrigger>
                      <SelectContent>
                        {paymentMethods.map((pm) => (
                          <SelectItem key={pm.value} value={pm.value}>
                            <pm.icon className="mr-2 h-4 w-4 inline-block" /> {pm.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amount</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="markAsPaid"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <FormLabel className="text-sm font-normal">Mark as paid</FormLabel>
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Add Payment
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}
