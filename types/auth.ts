export type Session = {
  id: number
  uid: string
  first_name: string
  last_name: string
  phone: string
  email: string
  gender: string
  image: string
  kind: string
  created_at: Date
  updated_at: Date
  organization: Organization
}

export type Organization = {
  uid: string
  name: string
  phone: string
  email: string
  subscription_status: string
  subscription_end_date: Date
  allowed_customer: number
  total_customer: number
}
