import { ScrollView, Text, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import HeroCard from "@/components/home/HeroCard";
import RoutineCard from "@/components/home/RoutineCard";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/colors";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          padding: 16,
          gap: 16,
        }}
      >
        <View className="flex-row items-center justify-between" >
          <Text className="text-primary text-2xl font-bold">
            MOVA
          </Text>
          <View className="flex-row items-center gap-4">
            <Ionicons name="notifications" color={COLORS.primary} size={20} />
            <Ionicons name="people" color={COLORS.primary} size={20} />
          </View>


        </View>

        <HeroCard />

        <RoutineCard
          title="Upper Body"
          muscles="Espalda • Pecho • Bíceps"
          image="https://images.unsplash.com/photo-1534438327276-14e5300c3a48"
        />
      </ScrollView>
    </SafeAreaView>
  );
}