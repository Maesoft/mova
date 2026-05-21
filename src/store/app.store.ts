import AsyncStorage from "@react-native-async-storage/async-storage";

export async function setHasSeenOnboarding() {
  await AsyncStorage.setItem("hasSeenOnboarding", "true");
}

export async function getHasSeenOnboarding() {
  const value = await AsyncStorage.getItem("hasSeenOnboarding");

  return value === "true";
}