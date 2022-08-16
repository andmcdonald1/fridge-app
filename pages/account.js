import React from "react";
import { StyleSheet, View } from "react-native";
import { Title } from "react-native-paper";

const AccountScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Title>Account Screen</Title>
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
export default AccountScreen;
