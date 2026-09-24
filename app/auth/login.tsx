import { useState } from 'react';

import { Image, Pressable, Text, TextInput, View, ActivityIndicator } from 'react-native';

import { router } from 'expo-router';

import { loginRequest } from '@/api/auth.api';

import { useAuthStore } from '@/store/auth.store';

export default function LoginScreen() {
  const { setToken } = useAuthStore();

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);

      const data = await loginRequest(email, password);

      await setToken(data.access_token);

      router.replace('/');
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 justify-center bg-background px-6">
      {/* LOGO */}
      <View className="mb-10 items-center">
        <Image
          source={require('../../assets/images/logo.png')}
          resizeMode="contain"
          style={{
            width: 250,
            height: 250,
          }}
        />
      </View>

      {/* FORM */}
      <View className="gap-4">
        {/* EMAIL */}
        <View>
          <Text className="mb-2 text-white">Email</Text>

          <TextInput
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
            placeholder="ejemplo@gmail.com"
            placeholderTextColor="#777"
            className="
              rounded-2xl
              border
              border-border
              bg-card
              px-4
              py-4
              text-base
              text-white
            "
          />
        </View>

        {/* PASSWORD */}
        <View>
          <Text className="mb-2 text-white">Contraseña</Text>

          <TextInput
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholder="********"
            placeholderTextColor="#777"
            className="
              rounded-2xl
              border
              border-border
              bg-card
              px-4
              py-4
              text-base
              text-white
            "
          />
        </View>

        {/* BUTTON */}
        <Pressable
          onPress={handleLogin}
          disabled={loading}
          className="
            mt-4
            items-center
            rounded-2xl
            bg-primary
            py-4
          ">
          {loading ? (
            <ActivityIndicator color="#000" />
          ) : (
            <Text className="font-bold text-base text-black">Ingresar</Text>
          )}
        </Pressable>
      </View>

      {/* FOOTER */}
      <View className="mt-8 flex-row justify-center">
        <Text className="text-muted">¿No tenés cuenta?</Text>

        <Text
          onPress={() => router.push('/auth/register')}
          className="ml-2 font-semibold text-primary">
          Registrate
        </Text>
      </View>
    </View>
  );
}
