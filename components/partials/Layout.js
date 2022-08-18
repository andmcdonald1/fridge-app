import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Bottom from "./Bottom";
import { LoginScreen, RegistrationScreen } from "@/pages";
import { Title } from "react-native-paper";

const Layout = () => {
  const Stack = createNativeStackNavigator();
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer style={styles.container}>
        <Stack.Navigator initialRouteName="login">
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default Layout;
