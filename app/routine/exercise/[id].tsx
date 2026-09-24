import {
  ScrollView,
  Text,
  View,
  Pressable,
} from "react-native";

import {
  useLocalSearchParams,
  router,
} from "expo-router";

import ExerciseVideo from "@/components/exercise/ExerciseVideo";
import { useRoutineStore } from "@/store/routine.store";

export default function ExerciseScreen() {
  const { id } =
    useLocalSearchParams();

  const { routine } =
    useRoutineStore();

  let exerciseData: any = null;

  // Buscar ejercicio dentro de toda la rutina
  for (const day of routine?.routine
    ?.days || []) {
    for (const block of day.blocks) {
      const found =
        block.exercises.find(
          (ex: any) =>
            ex.exercise.id ===
            Number(id)
        );

      if (found) {
        exerciseData = found;
        break;
      }
    }

    if (exerciseData) break;
  }

  if (!exerciseData) {
    return (
      <View className="flex-1 items-center justify-center bg-background">
        <Text className="text-white">
          Ejercicio no encontrado
        </Text>
      </View>
    );
  }

  const exercise = exerciseData.exercise;

  return (
    <View className="flex-1 bg-background">
      <ScrollView
        showsVerticalScrollIndicator={
          false
        }
        contentContainerStyle={{
          paddingBottom: 120,
        }}
      >
        {/* HERO */}
        <View className="px-6 pt-20">
          <Text className="text-primary text-sm font-bold">
            {exercise.category?.name}
          </Text>

          <Text className="mt-2 text-4xl font-bold text-white">
            {exercise.name}
          </Text>
        </View>

        {/* VIDEO */}
        <View className="mt-8 px-6">
          {exercise.videoUrl ? (
            <View className="overflow-hidden rounded-3xl border border-border">
              <ExerciseVideo
                videoUrl={
                  exercise.videoUrl
                }
              />
            </View>
          ) : (
            <View
              className="
                h-60
                items-center
                justify-center
                rounded-3xl
                border
                border-border
                bg-card
              "
            >
              <Text className="text-muted">
                Video no disponible
              </Text>
            </View>
          )}
        </View>

        {/* INDICACIONES */}
        <View className="mt-8 px-6">
          <View
            className="
              rounded-3xl
              border
              border-border
              bg-card
              p-5
            "
          >
            <Text className="text-primary text-sm font-bold">
              INDICACIONES
            </Text>

            <Text className="mt-3 text-xl font-bold text-white">
              {exerciseData.instructions}
            </Text>
          </View>
        </View>

        {/* DESCRIPCIÓN */}
        <View className="mt-5 px-6">
          <View
            className="
              rounded-3xl
              border
              border-border
              bg-card
              p-5
            "
          >
            <Text className="text-primary text-sm font-bold">
              DESCRIPCIÓN
            </Text>

            <Text className="text-muted mt-3 text-base leading-7">
              {exercise.description ||
                "No hay descripción disponible para este ejercicio."}
            </Text>
          </View>
        </View>

        {/* BOTÓN */}
        <View className="mt-8 px-6">
          <Pressable
            onPress={() =>
              router.back()
            }
            className="
              items-center
              rounded-2xl
              bg-primary
              py-4
            "
          >
            <Text className="text-base font-bold text-black">
              Volver al bloque
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}