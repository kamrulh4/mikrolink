import {
  BanknoteIcon,
  CalendarIcon,
  CircleCheckIcon,
  CircleDollarSignIcon,
  CircleXIcon,
} from "lucide-react"

export const paymentMethods = [
  {
    value: "CASH",
    label: "Cash",
    icon: BanknoteIcon,
  },
  {
    value: "OTHER",
    label: "Other",
    icon: CircleDollarSignIcon,
  },
]

export const paymentStatuses = [
  {
    label: "Paid",
    value: "true",
    icon: CircleCheckIcon,
  },
  {
    label: "Unpaid",
    value: "false",
    icon: CircleXIcon,
  },
]

export const months = [
  { value: "JANUARY", label: "January", icon: CalendarIcon },
  { value: "FEBRUARY", label: "February", icon: CalendarIcon },
  { value: "MARCH", label: "March", icon: CalendarIcon },
  { value: "APRIL", label: "April", icon: CalendarIcon },
  { value: "MAY", label: "May", icon: CalendarIcon },
  { value: "JUNE", label: "June", icon: CalendarIcon },
  { value: "JULY", label: "July", icon: CalendarIcon },
  { value: "AUGUST", label: "August", icon: CalendarIcon },
  { value: "SEPTEMBER", label: "September", icon: CalendarIcon },
  { value: "OCTOBER", label: "October", icon: CalendarIcon },
  { value: "NOVEMBER", label: "November", icon: CalendarIcon },
  { value: "DECEMBER", label: "December", icon: CalendarIcon },
]
