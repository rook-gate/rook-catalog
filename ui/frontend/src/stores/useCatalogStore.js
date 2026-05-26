import { create } from "zustand"

export const useCatalogStore = create((set) => ({
  activeCategory: "home",
  setActiveCategory: (id) => set({ activeCategory: id }),

  installingApps: new Set(),
  setInstalling: (id, value) =>
    set((s) => {
      const next = new Set(s.installingApps);
      value ? next.add(id) : next.delete(id);
      return { installingApps: next };
    }),
}));
