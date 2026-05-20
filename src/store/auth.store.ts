// src/store/auth.store.ts

import { create } from "zustand";

type AuthStore = {
  token: string | null;

  setToken: (token: string | null) => void;

  isAuthenticated: boolean;
};

export const useAuthStore = create<AuthStore>((set) => ({
  token: null,

  isAuthenticated: false,

  setToken: (token) =>
    set({
      token,
      isAuthenticated: !!token,
    }),
}));