import React from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Bottom from "./Bottom";
import { LoginScreen, RegistrationScreen } from "@/pages";

const Layout = () => {
  const { width } = useWindowDimensions();
  const styles = StyleSheet.create({
    container: { width: width, flex: 1 },
  });

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="register" component={RegistrationScreen} />
        <Stack.Screen name="bottom" component={Bottom} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Layout;
