import "../global.css";

import { useEffect, useState } from "react";

import { Stack, Redirect, useSegments } from "expo-router";

import { ActivityIndicator, View } from "react-native";

import { useFonts } from "expo-font";

import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

import { COLORS } from "@/constants/colors";

import { getHasSeenOnboarding } from "@/store/app.store";

import { useAuthStore } from "@/store/auth.store";

export default function RootLayout() {
  const { token } = useAuthStore();

  const segments = useSegments();

  const [isLoading, setIsLoading] = useState(true);

  const [hasSeenOnboarding, setHasSeenOnboardingState] =
    useState<boolean | null>(null);

  useEffect(() => {
    async function loadApp() {
      const seen = await getHasSeenOnboarding();

      setHasSeenOnboardingState(seen);

      setIsLoading(false);
    }

    loadApp();
  }, []);

  // LOADING
  if (isLoading) {
    return (
      <View
        className="flex-1 items-center justify-center"
        style={{
          backgroundColor: COLORS.background,
        }}
      >
        <ActivityIndicator
          size="large"
          color={COLORS.primary}
        />
      </View>
    );
  }

  const inAuthRoute = segments[0] === "auth";

  const inOnboardingRoute =
    segments[0] === "onboarding";

  // NO VIO ONBOARDING
  if (
    !hasSeenOnboarding &&
    !inOnboardingRoute
  ) {
    return <Redirect href="/onboarding" />;
  }

  // // NO LOGUEADO
  // if (
  //   hasSeenOnboarding &&
  //   !token &&
  //   !inAuthRoute
  // ) {
  //   return <Redirect href="/auth/login" />;
  // }

  // // LOGUEADO
  // if (token && inAuthRoute) {
  //   return <Redirect href="/" />;
  // }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}