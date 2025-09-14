import { createStore } from "stan-js"

import { User } from "@/types/logins"

export const { useStore: useUsersStore, reset: resetUsersStore } = createStore({
  isViewUserDialogOpen: false,
  isUpsertUserDialogOpen: false,
  userMutationType: "" as "add" | "edit",
  selectedUser: {} as User,
})
