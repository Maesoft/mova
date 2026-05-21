// app/onboarding/index.tsx

import { useRef, useState } from "react";

import {
  FlatList,
  Pressable,
  Text,
  View,
  ViewToken,
} from "react-native";

import { router } from "expo-router";

import OnboardingSlide from "@/components/onboarding/OnboardingSlide";
import Pagination from "@/components/onboarding/Pagination";

import { COLORS } from "@/constants/colors";
import { ONBOARDING_DATA } from "@/constants/onboarding";

import { setHasSeenOnboarding } from "@/store/app.store";

export default function OnboardingScreen() {
  const flatListRef = useRef<FlatList>(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const isLastSlide =
    currentIndex === ONBOARDING_DATA.length - 1;

  const viewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems[0]?.index !== null) {
        setCurrentIndex(viewableItems[0].index ?? 0);
      }
    }
  ).current;

  const viewConfig = useRef({
    viewAreaCoveragePercentThreshold: 50,
  }).current;

  async function handleNext() {
    // ÚLTIMO SLIDE
    if (isLastSlide) {
      await setHasSeenOnboarding();

      router.replace("/auth/login");

      return;
    }

    flatListRef.current?.scrollToIndex({
      index: currentIndex + 1,
      animated: true,
    });
  }

  return (
    <View
      className="flex-1"
      style={{
        backgroundColor: COLORS.background,
      }}
    >
      {/* SLIDES */}
      <FlatList
        ref={flatListRef}
        data={ONBOARDING_DATA}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <OnboardingSlide item={item} />
        )}
        horizontal
        pagingEnabled
        bounces={false}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
      />

      {/* FOOTER */}
      <View className="absolute bottom-16 left-0 right-0 px-6">
        {/* PAGINATION */}
        <Pagination
          total={ONBOARDING_DATA.length}
          currentIndex={currentIndex}
        />

        {/* BUTTON */}
        <Pressable
          className="mt-10 items-center rounded-2xl py-4"
          style={{
            backgroundColor: COLORS.primary,
          }}
          onPress={handleNext}
        >
          <Text
            className="text-base font-bold"
            style={{
              color: "#000",
            }}
          >
            {isLastSlide ? "Comenzar" : "Siguiente"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}