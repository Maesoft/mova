import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        // 🎨 Estilo general (dark como tu app)
        tabBarStyle: {
          backgroundColor: '#000000', // gris oscuro (tailwind gray-800)
          borderTopWidth: 0,
          height: 100,
          paddingBottom: 8,
          paddingTop: 8,
        },

        // 🎯 Colores
        tabBarActiveTintColor: '#c4c86a', // naranja (orange-500)
        tabBarInactiveTintColor: '#4f682e', // gris

        // 🧼 Labels
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '800',
          fontFamily: 'Montserrat-SemiBold',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),

        }}
      />

      <Tabs.Screen
        name="routine"
        options={{
          title: "Rutina",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}