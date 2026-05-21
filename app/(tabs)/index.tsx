import { ScrollView, Text, View, Pressable } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { COLORS } from "@/constants/colors";

export default function HomeScreen() {
  return (
    <ScrollView
      className="flex-1"
      style={{
        backgroundColor: COLORS.background,
      }}
      contentContainerStyle={{
        padding: 24,
        paddingBottom: 120,
      }}
    >
      {/* HEADER */}
      <View className="mb-10 mt-4">
        <Text
          className="text-zinc-400 text-base"
        >
          Bienvenido 👋
        </Text>

        <Text
          className="text-4xl font-bold mt-2"
          style={{
            color: COLORS.white,
          }}
        >
          Matias
        </Text>
      </View>

      {/* HERO CARD */}
      <View
        className="rounded-3xl p-6 mb-8"
        style={{
          backgroundColor: COLORS.primaryDark,
        }}
      >
        <Text
          className="text-sm mb-2"
          style={{
            color: "#d4d4d8",
          }}
        >
          Tu objetivo de hoy
        </Text>

        <Text
          className="text-3xl font-bold mb-4"
          style={{
            color: COLORS.white,
          }}
        >
          Entrenar 45 min
        </Text>

        <Pressable
          className="rounded-2xl px-5 py-4 self-start"
          style={{
            backgroundColor: COLORS.primary,
          }}
        >
          <Text className="font-bold text-black">
            Comenzar
          </Text>
        </Pressable>
      </View>

      {/* STATS */}
      <View className="flex-row gap-4 mb-8">
        {/* CARD */}
        <View
          className="flex-1 rounded-3xl p-5"
          style={{
            backgroundColor: COLORS.card,
          }}
        >
          <Ionicons
            name="flame"
            size={26}
            color={COLORS.primary}
          />

          <Text
            className="text-3xl font-bold mt-4"
            style={{
              color: COLORS.white,
            }}
          >
            420
          </Text>

          <Text
            style={{
              color: COLORS.muted,
            }}
          >
            Calorías
          </Text>
        </View>

        {/* CARD */}
        <View
          className="flex-1 rounded-3xl p-5"
          style={{
            backgroundColor: COLORS.card,
          }}
        >
          <Ionicons
            name="barbell"
            size={26}
            color={COLORS.primary}
          />

          <Text
            className="text-3xl font-bold mt-4"
            style={{
              color: COLORS.white,
            }}
          >
            12
          </Text>

          <Text
            style={{
              color: COLORS.muted,
            }}
          >
            Rutinas
          </Text>
        </View>
      </View>

      {/* SECTION */}
      <View className="mb-5">
        <Text
          className="text-2xl font-bold"
          style={{
            color: COLORS.white,
          }}
        >
          Grupo Muscular a Entrenar Hoy
        </Text>
      </View>

      {/* ROUTINE CARD */}
      <View
        className="rounded-3xl p-5 mb-4"
        style={{
          backgroundColor: COLORS.card,
        }}
      >
        <View className="flex-row justify-between items-center">
          <View>
            <Text
              className="text-xl font-bold"
              style={{
                color: COLORS.white,
              }}
            >
              Pecho
            </Text>

            <Text
              className="mt-1"
              style={{
                color: COLORS.muted,
              }}
            >
              2 Bloques
            </Text>
          </View>

          <Ionicons
            name="chevron-forward"
            size={24}
            color={COLORS.primary}
          />
        </View>
      </View>

      {/* ROUTINE CARD */}
      <View
        className="rounded-3xl p-5"
        style={{
          backgroundColor: COLORS.card,
        }}
      >
        <View className="flex-row justify-between items-center">
          <View>
            <Text
              className="text-xl font-bold"
              style={{
                color: COLORS.white,
              }}
            >
              Biceps
            </Text>

            <Text
              className="mt-1"
              style={{
                color: COLORS.muted,
              }}
            >
              2 Bloques
            </Text>
          </View>

          <Ionicons
            name="chevron-forward"
            size={24}
            color={COLORS.primary}
          />
        </View>
      </View>
    </ScrollView>
  );
}