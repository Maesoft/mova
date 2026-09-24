// app/nutrition/index.tsx

import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
} from "react-native";

import { router } from "expo-router";

export default function NutritionScreen() {
  // MOCK
  const nutrition = {
    title: "Tostadas proteicas con palta",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    recipe: `
Ingredientes

• 2 tostadas integrales
• 1 palta madura
• 2 huevos
• Sal y pimienta

Preparación

1. Tostar el pan.
2. Pisar la palta.
3. Cocinar los huevos.
4. Colocar todo sobre las tostadas.
5. Servir y disfrutar.

Macros aproximados

• Proteínas: 22g
• Carbohidratos: 28g
• Grasas: 18g
    `,
  };

  return (
    <View className="flex-1 bg-background">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 120,
        }}
      >
        {/* IMAGEN */}
        <Image
          source={{
            uri: nutrition.image,
          }}
          className="h-80 w-full"
          resizeMode="cover"
        />

        {/* CONTENIDO */}
        <View className="px-6 py-6">
          <Text className="text-primary text-sm font-bold">
            NUTRICIÓN
          </Text>

          <Text className="mt-2 text-3xl font-bold text-white">
            {nutrition.title}
          </Text>

          <View
            className="
              mt-6
              rounded-3xl
              border
              border-border
              bg-card
              p-5
            "
          >
            <Text className="text-muted text-base leading-7">
              {nutrition.recipe}
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* BOTÓN */}
      <View className="absolute bottom-8 left-6 right-6">
        <Pressable
          onPress={() => router.back()}
          className="
            items-center
            rounded-2xl
            bg-primary
            py-4
          "
        >
          <Text className="font-bold text-base text-black">
            Volver
          </Text>
        </Pressable>
      </View>
    </View>
  );
}