"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { useUserStore } from "./interface";

export const useAppStore = create<useUserStore>()(
  persist(
    (set) => ({
      user: {
        id: 0,
        name: "",
        email: "",
        password: "",
      },
      setUser: (userData) =>
        set((state) => ({
          user: { ...state.user, ...userData.user },
        })),
      clearUser: () =>
        set({
          user: { id: 0, name: "", email: "", password: "" },
        }),
    }),
    {
      name: "app-storage",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
