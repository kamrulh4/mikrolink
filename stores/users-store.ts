import { createStore } from "stan-js"

export const { useStore: useUsersStore, reset: resetUsersStore } = createStore({
  isUpsertUserDialogOpen: false,
  userMutationType: "" as "add" | "edit",
  selectedUser: {} as any,
})
