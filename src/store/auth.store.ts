import AsyncStorage from '@react-native-async-storage/async-storage';

import { create } from 'zustand';

type AuthStore = {
  token: string | null;

  setToken: (
    token: string | null
  ) => Promise<void>;

  loadToken: () => Promise<void>;

  logout: () => Promise<void>;
};

export const useAuthStore =
  create<AuthStore>((set) => ({
    // STATE
    token: null,

    // SET TOKEN
    setToken: async (token) => {
      try {
        if (token) {
          await AsyncStorage.setItem(
            'token',
            token
          );
        } else {
          await AsyncStorage.removeItem(
            'token'
          );
        }

        set({
          token,
        });
      } catch (error) {
        console.log(
          'Error saving token:',
          error
        );
      }
    },

    // LOAD TOKEN
    loadToken: async () => {
      try {
        const token =
          await AsyncStorage.getItem(
            'token'
          );

        set({
          token,
        });
      } catch (error) {
        console.log(
          'Error loading token:',
          error
        );
      }
    },

    // LOGOUT
    logout: async () => {
      try {
        await AsyncStorage.removeItem(
          'token'
        );

        set({
          token: null,
        });
      } catch (error) {
        console.log(
          'Error removing token:',
          error
        );
      }
    },
  }));