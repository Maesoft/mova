import { ImageBackground, Text, View } from "react-native";
import Card from "../ui/Card";

export default function HeroCard() {
  return (
    <Card className="h-[220px]">
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
        }}
        className="flex-1"
        imageStyle={{
          borderRadius: 28,
          opacity: 0.55,
        }}
      >
        <View className="flex-1 p-6 justify-between">
          <Text className="text-white text-lg">
            ☀️ Buen día, Matías 👋
          </Text>

          <View>
            <Text className="text-white text-4xl font-bold leading-[46px]">
              Cada entrenamiento{"\n"}
              te acerca a tu{"\n"}
              <Text className="text-[#cfff55]">
                mejor versión.
              </Text>
            </Text>

            <Text className="text-[#A3A3A3] mt-4 text-base">
              Seguí enfocándote, lo estás logrando.
            </Text>
          </View>
        </View>
      </ImageBackground>
    </Card>
  );
}