import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { View, Text, Pressable } from 'react-native';

export default function ProfileScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-2xl font-bold text-white">Perfil</Text>
      <Pressable className="mt-4 rounded-lg bg-primary px-4 py-2"
        onPress={async () => {
          await AsyncStorage.removeItem('has_seen_onboarding');

          router.replace('/onboarding');
        }}>
        <Text className="text-black">Ver onboarding otra vez</Text>
      </Pressable>
      <Pressable className="mt-4 rounded-lg bg-primary px-4 py-2"
        onPress={async () => {
          await AsyncStorage.clear();

          router.replace('/onboarding');
        }}>
        <Text className="text-black">Borrar Datos Locales</Text>
      </Pressable>
    </View>
  );
}
