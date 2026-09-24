import {
  ScrollView,
  Text,
  View,
  Pressable,
} from "react-native";

import { router } from "expo-router";

import { useRoutineStore } from "@/store/routine.store";

export default function RoutineScreen() {
  const { routine } = useRoutineStore();
  // LOADING
  if (!routine) {
    return (
      <View className="flex-1 items-center justify-center bg-background">
        <Text className="text-textSecondary text-base">
          No hay rutina cargada
        </Text>
      </View>
    );
  }

  const days = routine.routine.days;

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
          <Text className="text-muted text-base">
            Tu rutina
          </Text>

          <Text className="mt-2 text-4xl font-bold text-white">
            {routine.routine.name}
          </Text>

          <Text className="text-muted mt-4 text-base leading-7">
            Completá cada día y seguí
            tu progreso para alcanzar
            tu mejor versión.
          </Text>
        </View>

        {/* DAYS */}
        <View className="mt-10 gap-5 px-6">
          {days.map(
            (
              day: any,
              index: number
            ) => {
              // TOTAL EJERCICIOS
              const totalExercises =
                day.blocks.reduce(
                  (
                    acc: number,
                    block: any
                  ) =>
                    acc +
                    block.exercises
                      .length,
                  0
                );

              // CATEGORÍAS
              const categories =
                [
                  ...new Set(
                    day.blocks.flatMap(
                      (
                        block: any
                      ) =>
                        block.exercises.map(
                          (
                            ex: any
                          ) =>
                            ex
                              .exercise
                              .category
                              ?.name
                        )
                    )
                  ),
                ];

              return (
                <Pressable
                  key={day.id}
                  onPress={() =>
                    router.push(
                      `/routine/day/${day.id}`
                    )
                  }
                  className="
                    overflow-hidden
                    rounded-3xl
                    border
                    border-border
                    bg-card
                  "
                >
                  {/* TOP */}
                  <View className="flex-row items-center justify-between px-5 pt-5">
                    <View className="flex-1 pr-4">
                      <Text className="text-primary text-sm font-bold">
                        {`DÍA ${day.dayNumber}`}
                      </Text>

                      <Text className="mt-2 text-2xl font-bold text-white">
                        {categories.join(
                          " • "
                        )}
                      </Text>
                    </View>

                    <View className="h-14 w-14 items-center justify-center rounded-2xl bg-primary">
                      <Text className="text-lg font-bold text-black">
                        {index + 1}
                      </Text>
                    </View>
                  </View>

                  {/* STATS */}
                  <View className="mt-6 flex-row gap-3 px-5">
                    <View className="flex-1 rounded-2xl bg-background p-4">
                      <Text className="text-muted text-sm">
                        Bloques
                      </Text>

                      <Text className="mt-1 text-2xl font-bold text-white">
                        {
                          day.blocks
                            .length
                        }
                      </Text>
                    </View>

                    <View className="flex-1 rounded-2xl bg-background p-4">
                      <Text className="text-muted text-sm">
                        Ejercicios
                      </Text>

                      <Text className="mt-1 text-2xl font-bold text-white">
                        {
                          totalExercises
                        }
                      </Text>
                    </View>
                  </View>

                  {/* BUTTON */}
                  <View className="p-5">
                    <View className="items-center rounded-2xl bg-primary py-4">
                      <Text className="text-base font-bold text-black">
                        Ver entrenamiento
                      </Text>
                    </View>
                  </View>
                </Pressable>
              );
            }
          )}
        </View>
      </ScrollView>
    </View>
  );
}