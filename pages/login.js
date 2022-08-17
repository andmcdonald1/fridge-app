import React, { useEffect, useState } from "react";
import { StyleSheet, KeyboardAvoidingView, View } from "react-native";
import { Title, TextInput, Button, HelperText } from "react-native-paper";
import { auth } from "@/services/firebase";
import { validateEmail } from "@/utils/strings";
import { login } from "@/api/auth";
import { MIN_PASSWORD_LENGTH, MAX_PASSWORD_LENGTH } from "@/configs/constants";

const LoginScreen = ({ navigation, route }) => {
  const [data, setData] = useState({});
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("bottom");
      }
    });
  }, []);

  const onSubmit = async () => {
    const hasEmailError = !data.email || !validateEmail(data.email);
    const hasPasswordError =
      !data.password || data.password.length < MIN_PASSWORD_LENGTH;
    setEmailError(hasEmailError);
    setPasswordError(hasPasswordError);
    if (hasEmailError || hasPasswordError) return;

    setLoading(true);

    // Login
    await login(data);
    setLoading(false);
  };

  const onInput = (key, val) => {
    const _data = { ...data, [key]: val };
    setData(_data);
  };

  const onNavigate = () => {
    navigation.navigate("register");
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View>
        <Title>Login</Title>
        <View>
          <TextInput
            onChange={(val) => onInput("email", val)}
            label="Email"
            placeholder="Please enter an email"
          />
          {emailError && (
            <HelperText type="error">An email is required</HelperText>
          )}
        </View>
        <View>
          <TextInput
            onChange={(val) => onInput("password", val)}
            label="Password"
            placeholder="Please enter an password"
            secureTextEntry
            maxLength={MAX_PASSWORD_LENGTH}
          />
          {passwordError && (
            <HelperText type="error">A password is required</HelperText>
          )}
        </View>
        <Button
          onPress={onSubmit}
          loading={loading}
          disabled={loading}
          mode="contained"
        >
          Login
        </Button>
        <Button onPress={onNavigate} uppercase={false}>
          Already have an account? Login
        </Button>
      </View>
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
export default LoginScreen;
