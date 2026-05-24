import {
  Image,
  Text,
  View,
} from "react-native";

import Card from "../ui/Card";
import Button from "../ui/Button";

type Props = {
  title: string;
  muscles: string;
  image: string;
};

export default function RoutineCard({
  title,
  muscles,
  image,
}: Props) {
  return (
    <Card className="flex-row p-5">
      <View className="flex-1 justify-between pr-4">
        <View>
          <Text className="text-[#C6FF3B] font-semibold">
            TU RUTINA
          </Text>

          <Text className="text-white text-3xl font-bold mt-2">
            {title}
          </Text>

          <Text className="text-[#9CA3AF] mt-2">
            {muscles}
          </Text>

          <View className="flex-row gap-4 mt-4 mb-2">
            <Text className="text-[#9CA3AF]">
              ⏱ 45 min
            </Text>

            <Text className="text-[#9CA3AF]">
              📈 Intermedio
            </Text>
          </View>
        </View>

        <Button title="Comenzar rutina" />
      </View>

      <Image
        source={{ uri: image }}
        className="w-[140px] h-full rounded-3xl"
      />
    </Card>
  );
}