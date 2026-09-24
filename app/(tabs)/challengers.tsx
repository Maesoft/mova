import { useCallback, useEffect, useState } from 'react';

import { ActivityIndicator, Image, Pressable, ScrollView, Text, View } from 'react-native';

import { getPublishedChallengerRequest, PublishedChallenger } from '@/api/challenger.api';
import ExerciseVideo from '@/components/exercise/ExerciseVideo';

export default function ChallengersScreen() {
  const [challenger, setChallenger] = useState<PublishedChallenger | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const loadChallenger = useCallback(async () => {
    try {
      setLoading(true);
      setError(false);
      setChallenger(await getPublishedChallengerRequest());
    } catch (requestError) {
      console.log('Error loading published challenger:', requestError);
      setError(true);
      setChallenger(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadChallenger();
  }, [loadChallenger]);

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center bg-background">
        <ActivityIndicator size="large" color="#C6FF3B" />
        <Text className="mt-4 text-muted">Cargando challenger...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1 items-center justify-center bg-background px-6">
        <Text className="text-center text-white">No pudimos cargar el challenger.</Text>
        <Pressable onPress={loadChallenger} className="mt-5 rounded-2xl bg-primary px-6 py-3">
          <Text className="font-bold text-black">Reintentar</Text>
        </Pressable>
      </View>
    );
  }

  if (!challenger) {
    return (
      <View className="flex-1 items-center justify-center bg-background px-6">
        <Text className="text-center text-white">
          No hay ningun challenger publicado por el momento.
        </Text>
      </View>
    );
  }

  return (
    <ScrollView
      className="flex-1 bg-background"
      contentContainerStyle={{ padding: 24, paddingBottom: 120 }}
      showsVerticalScrollIndicator={false}>
      <Text className="font-bold text-sm text-primary">CHALLENGERS</Text>
      <Text className="mt-2 font-bold text-4xl text-white">{challenger.title}</Text>

      <View className="mt-8 overflow-hidden rounded-3xl border border-border bg-card">
        {challenger.mediaUrl ? (
          challenger.mediaType === 'video' ? (
            <ExerciseVideo videoUrl={challenger.mediaUrl} />
          ) : (
            <Image
              source={{ uri: challenger.mediaUrl }}
              className="h-64 w-full"
              resizeMode="cover"
            />
          )
        ) : (
          <View className="h-40 items-center justify-center">
            <Text className="text-muted">Media no disponible</Text>
          </View>
        )}
      </View>

      <View className="mt-6 rounded-3xl border border-border bg-card p-5">
        <Text className="font-bold text-sm text-primary">DESCRIPCION</Text>
        <Text className="mt-3 text-base leading-7 text-muted">
          {challenger.description || 'Sin descripcion disponible.'}
        </Text>
      </View>
    </ScrollView>
  );
}
