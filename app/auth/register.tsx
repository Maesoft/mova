import { useState } from 'react';

import { ActivityIndicator, Image, Pressable, Text, TextInput, View } from 'react-native';

import { router } from 'expo-router';

import { registerRequest } from '@/api/auth.api';

import { useAuthStore } from '@/store/auth.store';

export default function RegisterScreen() {
  const { setToken } = useAuthStore();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = async () => {
    setErrorMessage('');

    if (!name.trim() || !email.trim() || password.length < 6) {
      setErrorMessage('Completá todos los campos. La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    try {
      setLoading(true);
      const data = await registerRequest(name.trim(), email.trim(), password);
      await setToken(data.access_token);
      router.replace('/');
    } catch (error) {
      console.log(error);
      setErrorMessage('No se pudo crear la cuenta. Revisá los datos e intentá nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 justify-center bg-background px-6">
      <View className="mb-8 items-center">
        <Image
          source={require('../../assets/images/logo.png')}
          resizeMode="contain"
          style={{ width: 180, height: 180 }}
        />
      </View>

      <View className="gap-4">
        <View>
          <Text className="mb-2 text-white">Nombre</Text>
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Tu nombre"
            placeholderTextColor="#777"
            className="rounded-2xl border border-border bg-card px-4 py-4 text-base text-white"
          />
        </View>

        <View>
          <Text className="mb-2 text-white">Email</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
            placeholder="ejemplo@gmail.com"
            placeholderTextColor="#777"
            className="rounded-2xl border border-border bg-card px-4 py-4 text-base text-white"
          />
        </View>

        <View>
          <Text className="mb-2 text-white">Contraseña</Text>
          <TextInput
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholder="Mínimo 6 caracteres"
            placeholderTextColor="#777"
            className="rounded-2xl border border-border bg-card px-4 py-4 text-base text-white"
          />
        </View>

        {errorMessage ? <Text className="text-center text-red-400">{errorMessage}</Text> : null}

        <Pressable
          onPress={handleRegister}
          disabled={loading}
          className="mt-2 items-center rounded-2xl bg-primary py-4">
          {loading ? (
            <ActivityIndicator color="#000" />
          ) : (
            <Text className="font-bold text-base text-black">Crear cuenta</Text>
          )}
        </Pressable>
      </View>

      <View className="mt-8 flex-row justify-center">
        <Text className="text-muted">¿Ya tenés cuenta?</Text>
        <Text
          onPress={() => router.replace('/auth/login')}
          className="ml-2 font-semibold text-primary">
          Ingresá
        </Text>
      </View>
    </View>
  );
}
