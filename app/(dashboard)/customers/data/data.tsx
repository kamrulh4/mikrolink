// import { CircleOff, } from "lucide-react";

import {
  CircleOff,
  Cpu,
  DollarSign,
  Gavel,
  Lock,
  LockOpen,
  Megaphone,
  ShoppingCart,
  Truck,
  Users,
} from "lucide-react"

export const categories = [
  {
    value: "finance",
    label: "Finance",
    icon: DollarSign,
  },
  {
    value: "legal",
    label: "Legal",
    icon: Gavel,
  },
  {
    value: "marketing",
    label: "Marketing",
    icon: Megaphone,
  },
  {
    value: "hr",
    label: "HR",
    icon: Users,
  },
  {
    value: "operations",
    label: "Operations",
    icon: Truck,
  },
  {
    value: "it",
    label: "IT",
    icon: Cpu,
  },
  {
    value: "sales",
    label: "Sales",
    icon: ShoppingCart,
  },
  {
    value: "other",
    label: "Other",
    icon: CircleOff,
  },
]

export const accessLevels = [
  {
    label: "Private",
    value: "private",
    icon: Lock,
  },
  {
    label: "Public",
    value: "public",
    icon: LockOpen,
  },
]
