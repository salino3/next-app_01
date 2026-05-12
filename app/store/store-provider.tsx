"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { initialUserData, User, useUserStore } from "./interface";

export const useAppStore = create<useUserStore>()(
  persist(
    (set) => ({
      user: {
        id: 0,
        name: "",
        email: "",
        password: "",
      },
      setUser: (userData: User) => set((state) => ({ user: userData })),

      clearUser: () =>
        set({
          user: initialUserData,
        }),
    }),
    {
      name: "app-storage",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
