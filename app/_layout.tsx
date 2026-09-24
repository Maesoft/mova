import '../global.css';

import { useEffect, useState } from 'react';

import {
  Stack,
  Redirect,
  useSegments,
} from 'expo-router';

import {
  ActivityIndicator,
  View,
} from 'react-native';

import { useFonts } from 'expo-font';

import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';

import { getHasSeenOnboarding } from '@/store/app.store';

import { useAuthStore } from '@/store/auth.store';

import { useRoutineStore } from '@/store/routine.store';

export default function RootLayout() {
  const { token, loadToken } =
    useAuthStore();

  const {
    loadRoutine,
    syncRoutine,
  } = useRoutineStore();

  const segments = useSegments();

  const [isLoading, setIsLoading] =
    useState(true);

  const [
    hasSeenOnboarding,
    setHasSeenOnboardingState,
  ] = useState<boolean | null>(null);

  // FONTS
  const [fontsLoaded] = useFonts({
    regular: Montserrat_400Regular,
    medium: Montserrat_500Medium,
    bold: Montserrat_700Bold,
  });

  useEffect(() => {
    async function loadApp() {
      try {
        // TOKEN
        await loadToken();

        // RUTINA LOCAL
        await loadRoutine();

        // ONBOARDING
        const seen =
          await getHasSeenOnboarding();

        setHasSeenOnboardingState(seen);

        // TOKEN ACTUAL
        const currentToken =
          useAuthStore.getState().token;

        // SINCRONIZAR RUTINA
        if (currentToken) {
          await syncRoutine();
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    loadApp();
  }, []);

  // LOADING
  if (isLoading || !fontsLoaded) {
    return (
      <View className="flex-1 items-center justify-center bg-background">
        <ActivityIndicator
          size="large"
          color="#C6FF3B"
        />
      </View>
    );
  }

  const inAuthRoute =
    segments[0] === 'auth';

  const inOnboardingRoute =
    segments[0] === 'onboarding';

  // NO VIO ONBOARDING
  if (
    !hasSeenOnboarding &&
    !inOnboardingRoute
  ) {
    return (
      <Redirect href="/onboarding" />
    );
  }

  // NO LOGUEADO
  if (
    hasSeenOnboarding &&
    !token &&
    !inAuthRoute
  ) {
    return (
      <Redirect href="/auth/login" />
    );
  }

  // LOGUEADO
  if (token && inAuthRoute) {
    return <Redirect href="/" />;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}