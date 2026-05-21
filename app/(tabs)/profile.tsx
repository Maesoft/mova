import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { View, Text, Pressable } from 'react-native';

export default function ProfileScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-2xl font-bold text-white">Perfil</Text>
      <Pressable
        onPress={async () => {
          await AsyncStorage.removeItem('has_seen_onboarding');

          router.replace('/onboarding');
        }}>
        <Text>Ver onboarding otra vez</Text>
      </Pressable>
    </View>
  );
}
