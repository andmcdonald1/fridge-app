import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Bottom from "./Bottom";
import { LoginScreen, RegistrationScreen } from "@/pages";
import Toast from "react-native-toastify";

const Layout = () => {
  const styles = StyleSheet.create({
    container: { flex: 1 },
  });

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="register"
          component={RegistrationScreen}
        />
        <Stack.Screen name="bottom" component={Bottom} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Layout;
