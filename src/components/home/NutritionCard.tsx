import {
  Image,
  Text,
  View,
} from "react-native";

import Card from "../ui/Card";

export default function NutritionCard({title, description, image}: {title?: string, description?: string, image?: string}) {
  return (
    <Card className="p-5 bg-primaryDark">
      <View className="flex-row items-center">
        {/* INFO */}
        <View className="flex-1 pr-4">
          <Text className="text-primary font-bold text-sm">
            ALIMENTACIÓN
          </Text>

          <Text className="text-white text-2xl font-bold mt-2">
            {title || "Plan nutricional personalizado"}
          </Text>

          <Text className="text-white mt-3 leading-5">
            {description || "Descubrí planes alimenticios y recetas para potenciar tus resultados."}
          </Text>

          <View className="mt-5">
            <View className="bg-primary self-start px-4 py-2 rounded-full">
              <Text className="text-black font-bold">
                Ver planes
              </Text>
            </View>
          </View>
        </View>

        {/* IMAGE */}
        <Image
          source={{
            uri: image || "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
          }}
          className="w-[120px] h-[160px] rounded-[24px]"
        />
      </View>
    </Card>
  );
}