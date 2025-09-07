import { createStore } from "stan-js"

export const { useStore: usePackagesStore, reset: resetPacksgesStore } = createStore({
  isUpsertPackageDialogOpen: false,
  packageMutationType: "" as "add" | "edit",
  selectedPackage: {} as any,
})
