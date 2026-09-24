import { useCallback, useState } from 'react';

import { useFocusEffect } from 'expo-router';

import { ActivityIndicator, Image, Pressable, ScrollView, Text, View } from 'react-native';

import { getPublishedNutritionRequest, PublishedNutrition } from '@/api/nutrition.api';

export default function NutritionScreen() {
  const [nutrition, setNutrition] = useState<PublishedNutrition | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const loadNutrition = useCallback(async () => {
    try {
      setLoading(true);
      setError(false);
      setNutrition(await getPublishedNutritionRequest());
    } catch (requestError) {
      console.log('Error loading published nutrition:', requestError);
      setError(true);
      setNutrition(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      void loadNutrition();
    }, [loadNutrition])
  );

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center bg-background">
        <ActivityIndicator size="large" color="#C6FF3B" />
        <Text className="mt-4 text-muted">Cargando receta...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1 items-center justify-center bg-background px-6">
        <Text className="text-center text-white">No pudimos cargar la receta.</Text>
        <Pressable onPress={loadNutrition} className="mt-5 rounded-2xl bg-primary px-6 py-3">
          <Text className="font-bold text-black">Reintentar</Text>
        </Pressable>
      </View>
    );
  }

  if (!nutrition) {
    return (
      <View className="flex-1 items-center justify-center bg-background px-6">
        <Text className="text-center text-white">
          No hay ninguna receta publicada por el momento.
        </Text>
      </View>
    );
  }

  return (
    <ScrollView
      className="flex-1 bg-background"
      contentContainerStyle={{ paddingBottom: 120 }}
      showsVerticalScrollIndicator={false}>
      {nutrition.image ? (
        <Image source={{ uri: nutrition.image }} className="h-80 w-full" resizeMode="cover" />
      ) : (
        <View className="h-48 items-center justify-center bg-card">
          <Text className="text-muted">Imagen no disponible</Text>
        </View>
      )}

      <View className="px-6 py-6">
        <Text className="font-bold text-sm text-primary">NUTRICIÓN</Text>
        <Text className="mt-2 font-bold text-3xl text-white">{nutrition.title}</Text>

        <View className="mt-6 rounded-3xl border border-border bg-card p-5">
          <Text className="text-base leading-7 text-muted">{nutrition.description}</Text>
        </View>
      </View>
    </ScrollView>
  );
}
