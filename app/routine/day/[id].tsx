// app/routine/day/[id].tsx

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

import { useRoutineStore } from "@/store/routine.store";

export default function DayScreen() {
  const { id } =
    useLocalSearchParams();

  const { routine } =
    useRoutineStore();

  // BUSCAR DÍA
  const day =
    routine?.routine?.days?.find(
      (d: any) =>
        d.id === Number(id)
    );

  // NO EXISTE
  if (!day) {
    return (
      <View className="flex-1 items-center justify-center bg-background">
        <Text className="text-white">
          Día no encontrado
        </Text>
      </View>
    );
  }

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
            DÍA {day.dayNumber}
          </Text>

          <Text className="mt-3 text-4xl font-bold text-white">
            Entrenamiento
          </Text>

          <Text className="text-white mt-4 text-base leading-7">
            Completá todos los bloques para
            finalizar el día.
          </Text>
        </View>

        {/* BLOCKS */}
        <View className="mt-10 gap-5 px-6">
          {day.blocks.map(
            (
              block: any,
              index: number
            ) => (
              <View
                key={block.id}
                className="
                  rounded-3xl
                  border
                  border-border
                  bg-card
                  p-5
                "
              >
                {/* HEADER */}
                <View className="flex-row items-center justify-between">
                  <View>
                    <Text className="text-primary text-2xl font-bold">
                      BLOQUE{" "}
                      {index + 1}
                    </Text>
                  </View>

                </View>

                {/* EXERCISES */}
                <View className="mt-6 gap-3">
                  {block.exercises.map(
                    (
                      ex: any,
                      exIndex: number
                    ) => (
                      <View
                        key={ex.id}
                        className="
                          rounded-2xl
                          bg-background
                          p-4
                        "
                      >
                        <Text className="text-primary text-sm">
                          EJERCICIO{" "}
                          {exIndex + 1}
                        </Text>

                        <Text className="mt-2 text-lg font-bold text-white">
                          {
                            ex.exercise
                              .name
                          }
                        </Text>

                        <Text className="text-muted mt-2 text-sm">
                          {
                            ex.instructions
                          }
                        </Text>
                      </View>
                    )
                  )}
                </View>

                {/* BUTTON */}
                <Pressable
                  onPress={() =>
                    router.push(
                      `/routine/block/${block.id}`
                    )
                  }
                  className="
                    mt-6
                    items-center
                    rounded-2xl
                    bg-primary
                    py-4
                  "
                >
                  <Text className="text-base font-bold text-black">
                    Comenzar bloque
                  </Text>
                </Pressable>
              </View>
            )
          )}
        </View>
      </ScrollView>
    </View>
  );
}