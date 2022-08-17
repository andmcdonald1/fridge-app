import React from "react";
import { StyleSheet, KeyboardAvoidingView } from "react-native";
import { Title } from "react-native-paper";

const RegistrationScreen = ({ navigation, route }) => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Title>Registration Screen</Title>
    </KeyboardAvoidingView>
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
export default RegistrationScreen;
