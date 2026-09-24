import { Image, Pressable, Text, View } from 'react-native';

import { router } from 'expo-router';

import Card from '../ui/Card';

export default function NutritionCard({
  title,
  description,
  image,
}: {
  title?: string;
  description?: string;
  image?: string;
}) {
  return (
    <Pressable onPress={() => router.push('/nutrition')}>
      <Card className="bg-primaryDark p-5">
        <View className="flex-row items-center">
          {/* INFO */}
          <View className="flex-1 pr-4">
            <Text className="font-bold text-sm text-primary">ALIMENTACIÓN</Text>

            <Text className="mt-2 font-bold text-2xl text-white">
              {title || 'Plan nutricional personalizado'}
            </Text>

            <Text className="mt-3 leading-5 text-white">
              {description ||
                'Descubrí planes alimenticios y recetas para potenciar tus resultados.'}
            </Text>

            <View className="mt-5">
              <View className="self-start rounded-full bg-primary px-4 py-2">
                <Text className="font-bold text-black">Ver planes</Text>
              </View>
            </View>
          </View>

          {/* IMAGE */}
          <Image
            source={{
              uri: image || 'https://images.unsplash.com/photo-1490645935967-10de6ba17061',
            }}
            className="h-[160px] w-[120px] rounded-[24px]"
          />
        </View>
      </Card>
    </Pressable>
  );
}
