import { createStore } from "stan-js"

import users from "@/data/users.json"

export const { useStore: useUsersStore, reset: resetUsersStore } = createStore({
  isViewUserDialogOpen: false,
  isUpsertUserDialogOpen: false,
  userMutationType: "" as "add" | "edit",
  selectedUser: {} as (typeof users.results)[number],
})
