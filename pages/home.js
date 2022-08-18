import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Title, Button } from "react-native-paper";
import { logout } from "@/api/auth";
import { auth } from "@/services/firebase";

const HomeScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Title>Home Screen</Title>
      <Button onPress={logout}>Logout</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
export default HomeScreen;
