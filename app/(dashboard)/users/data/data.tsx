import {
  BriefcaseIcon,
  MarsIcon,
  ShieldCheckIcon,
  ShieldIcon,
  VenusAndMarsIcon,
  VenusIcon,
} from "lucide-react"

export const genders = [
  {
    value: "MALE",
    label: "Male",
    icon: MarsIcon,
  },
  {
    value: "FEMALE",
    label: "Female",
    icon: VenusIcon,
  },
  {
    value: "UNKNOWN",
    label: "Unknown",
    icon: VenusAndMarsIcon,
  },
]

export const kinds = [
  {
    label: "Admin",
    value: "ADMIN",
    icon: ShieldIcon,
  },
  {
    label: "Manager",
    value: "MANAGER",
    icon: BriefcaseIcon,
  },
  {
    label: "Super Admin",
    value: "SUPER_ADMIN",
    icon: ShieldCheckIcon,
  },
]
