import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./HomeScreen";

const Main = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home Screen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

export default Main;
