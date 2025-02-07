import { View, Text } from "react-native";
import React from "react";
// navigation container import
import { NavigationContainer } from "@react-navigation/native";
// native stack import
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// screens import
import HomeScreen from "../screens/HomeScreen";
import ProductScreen from "../screens/ProductScreen";

// stack çalıştırma
const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ProductScreen" component={ProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
