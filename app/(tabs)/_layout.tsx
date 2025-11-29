import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#4496eeff",
        headerShadowVisible: true,
        headerStyle: {
          shadowColor: "gray",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Chat",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "chatbox" : "chatbox-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={
                focused ? "information-circle" : "information-circle-outline"
              }
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="seting"
        options={{
          title: "Seting",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "settings" : "settings-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
