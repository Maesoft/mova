import { Text, View } from "react-native";

import Card from "../ui/Card";

export default function ChallengersCard() {
  return (
    <Card className="p-5 bg-gray-700">
      {/* TOP */}
      <View className="flex-row items-center justify-between">
        <View>
          <Text className="text-primary font-bold text-sm">
            CHALLENGERS
          </Text>

          <Text className="text-white text-2xl font-bold mt-2">
            30 días{"\n"}
            de disciplina 🔥
          </Text>
        </View>

        {/* PROGRESS */}
        <View className="items-center justify-center w-20 h-20 rounded-full border-4 border-primary">
          <Text className="text-primary text-2xl font-bold">
            75%
          </Text>
        </View>
      </View>

      {/* DESCRIPTION */}
      <Text className="text-white mt-5 leading-5">
        Completá entrenamientos diarios y seguí tu
        progreso para desbloquear recompensas.
      </Text>

      {/* FOOTER */}
      <View className="mt-6 flex-row justify-between items-center">
        <View>
          <Text className="text-white text-sm">
            Día actual
          </Text>

          <Text className="text-white text-xl font-bold">
            22 / 30
          </Text>
        </View>

        <View className="bg-primary px-5 py-3 rounded-full">
          <Text className="text-black font-bold">
            Continuar
          </Text>
        </View>
      </View>
    </Card>
  );
}