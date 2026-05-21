import { create } from "zustand"


export const useCatalogStore = create((set) => ({
  activeCategory: "developer-tools",
  setActiveCategory: (id) => set({ activeCategory: id }),
}))