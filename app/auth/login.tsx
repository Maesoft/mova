// app/auth/login.tsx

import { Image, Pressable, Text, TextInput, View } from 'react-native';

import { COLORS } from '../../src/constants/colors';
import { router } from 'expo-router';

export default function LoginScreen() {
  return (
    <View
      className="flex-1 justify-center px-6"
      style={{
        backgroundColor: COLORS.background,
      }}>
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
          <Text
            className="mb-2"
            style={{
              color: COLORS.white,
            }}>
            Email
          </Text>

          <TextInput
            placeholder="ejemplo@gmail.com"
            placeholderTextColor={COLORS.muted}
            className="
              rounded-2xl
              px-4
              py-4
              text-base
            "
            style={{
              backgroundColor: COLORS.card,
              borderWidth: 1,
              borderColor: COLORS.border,
              color: COLORS.white,
            }}
          />
        </View>

        {/* PASSWORD */}
        <View>
          <Text
            className="mb-2"
            style={{
              color: COLORS.white,
            }}>
            Contraseña
          </Text>

          <TextInput
            secureTextEntry
            placeholder="********"
            placeholderTextColor={COLORS.muted}
            className="
              rounded-2xl
              px-4
              py-4
              text-base
            "
            style={{
              backgroundColor: COLORS.card,
              borderWidth: 1,
              borderColor: COLORS.border,
              color: COLORS.white,
            }}
          />
        </View>

        {/* BUTTON */}
        <Pressable
          onPress={() => router.replace('/(tabs)')}
          className="
            mt-4
            items-center
            rounded-2xl
            py-4
          "
          style={{
            backgroundColor: COLORS.primary,
          }}>
          <Text
            className="text-base font-bold"
            style={{
              color: '#000',
            }}>
            Ingresar
          </Text>
        </Pressable>
      </View>

      {/* FOOTER */}
      <View className="mt-8 flex-row justify-center">
        <Text
          style={{
            color: COLORS.muted,
          }}>
          ¿No tenés cuenta?
        </Text>

        <Text
          className="ml-2 font-semibold"
          style={{
            color: COLORS.primary,
          }}>
          Registrarse
        </Text>
      </View>
    </View>
  );
}
