import "../global.css";

import { Stack, useSegments, Redirect } from "expo-router";

import { useAuthStore } from "../src/store/auth.store";

export default function RootLayout() {
  const { token } = useAuthStore();

  const segments = useSegments();

  const inAuthGroup = segments[0] === "auth";

  // NO LOGUEADO
  if (!token && !inAuthGroup) {
    return <Redirect href="/auth/login" />;
  }

  // LOGUEADO
  if (token && inAuthGroup) {
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