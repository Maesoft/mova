import AsyncStorage from "@react-native-async-storage/async-storage";

import { create } from "zustand";

import { getMyRoutineRequest } from "@/api/routine.api";

type RoutineStore = {
  routine: any | null;

  routineId: number | null;

  loadRoutine: () => Promise<void>;

  syncRoutine: () => Promise<void>;

  setRoutine: (
    routine: any
  ) => Promise<void>;

  clearRoutine: () => Promise<void>;
};

export const useRoutineStore =
  create<RoutineStore>((set) => ({
    routine: null,

    routineId: null,

    // SET
    setRoutine: async (routineData) => {
      try {
        await AsyncStorage.setItem(
          "routine",
          JSON.stringify(routineData)
        );

        await AsyncStorage.setItem(
          "routineId",
          routineData.routine.id.toString()
        );

        set({
          routine: routineData,

          routineId:
            routineData.routine.id,
        });
      } catch (error) {
        console.log(error);
      }
    },

    // LOAD LOCAL
    loadRoutine: async () => {
      try {
        const routine =
          await AsyncStorage.getItem(
            "routine"
          );

        const routineId =
          await AsyncStorage.getItem(
            "routineId"
          );

        set({
          routine: routine
            ? JSON.parse(routine)
            : null,

          routineId: routineId
            ? Number(routineId)
            : null,
        });
      } catch (error) {
        console.log(error);
      }
    },

    // SYNC BACKEND
    syncRoutine: async () => {
      try {
        const backendRoutine =
          await getMyRoutineRequest();

        const localRoutineId =
          useRoutineStore.getState()
            .routineId;

        const backendRoutineId =
          backendRoutine.routine.id;

        // SI CAMBIÓ
        if (
          localRoutineId !==
          backendRoutineId
        ) {
          await useRoutineStore
            .getState()
            .setRoutine(
              backendRoutine
            );
        }
      } catch (error) {
        console.log(
          "Error syncing routine:",
          error
        );
      }
    },

    // CLEAR
    clearRoutine: async () => {
      await AsyncStorage.removeItem(
        "routine"
      );

      await AsyncStorage.removeItem(
        "routineId"
      );

      set({
        routine: null,

        routineId: null,
      });
    },
  }));