import { ScrollView, Text, View, Pressable } from 'react-native';

import { useLocalSearchParams, router } from 'expo-router';

import { useRoutineStore } from '@/store/routine.store';

export default function BlockScreen() {
  const { id } = useLocalSearchParams();

  const { routine } = useRoutineStore();

  let block: any = null;
  let day: any = null;

  // Buscar bloque dentro de toda la rutina
  for (const currentDay of routine?.routine?.days || []) {
    const foundBlock = currentDay.blocks.find((b: any) => b.id === Number(id));

    if (foundBlock) {
      block = foundBlock;
      day = currentDay;
      break;
    }
  }

  if (!block) {
    return (
      <View className="flex-1 items-center justify-center bg-background">
        <Text className="text-white">Bloque no encontrado</Text>
      </View>
    );
  }

  const totalExercises = block.exercises.length;

  return (
    <View className="flex-1 bg-background">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 120,
        }}>
        {/* HERO */}
        <View className="px-6 pt-20">
          <Text className="font-bold text-sm text-primary">DÍA {day.dayNumber}</Text>

          <Text className="mt-2 font-bold text-4xl text-white">{block.name}</Text>

          <Text className="text-textSecondary mt-4 text-base">{totalExercises} ejercicios</Text>
        </View>

        {/* EJERCICIOS */}
        <View className="mt-10 gap-4 px-6">
          {block.exercises.map((item: any, index: number) => (
            <Pressable
              key={item.id}
              onPress={() => {
                  router.push(
                  `/routine/exercise/${item.exercise.id}`
                );
              }}
              className="
                  rounded-3xl
                  border
                  border-border
                  bg-card
                  p-5
                ">
              <Text className="font-bold text-sm text-primary">EJERCICIO {index + 1}</Text>

              <Text className="mt-2 font-bold text-xl text-white">{item.exercise.name}</Text>

              <Text className="text-textSecondary mt-2">{item.instructions}</Text>

              <Text className="mt-4 font-semibold text-primary">Ver ejercicio →</Text>
            </Pressable>
          ))}
        </View>

        {/* FINALIZAR */}
        <View className="mt-8 px-6">
          <Pressable
            className="
              items-center
              rounded-2xl
              bg-primary
              py-4
            "
            onPress={() => {
              // Más adelante:
              // marcar bloque completado
              // avanzar al siguiente bloque
              // completar día
            }}>
            <Text className="font-bold text-base text-black">Finalizar bloque</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}
