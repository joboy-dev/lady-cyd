import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Breadcrumb {
    title: string;
    subtitle: string;
}

type Theme = "light" | "dark";

interface GeneralState {
    breadcrumb: Breadcrumb;
    theme: Theme;
    setBreadcrumb: (breadcrumb: Breadcrumb) => void;
    setTheme: (theme: Theme) => void;
    toggleTheme: () => void;
}

export const useGeneralStore = create<GeneralState>()(
  persist<GeneralState>(
    (set, get) => ({
      breadcrumb: {
        title: "",
        subtitle: "",
      },
      theme: "dark",
      setBreadcrumb: (breadcrumb) => set({ breadcrumb }),
      setTheme: (theme) => set({ theme }),
      toggleTheme: () => set({ theme: get().theme === "dark" ? "light" : "dark" }),
    }),
    {
      name: "lady-cyd-preferences",
      partialize: (state) => ({ theme: state.theme }) as GeneralState,
    }
  )
);