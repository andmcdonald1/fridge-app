import React, { useEffect, useState } from "react";
import { StyleSheet, KeyboardAvoidingView, View } from "react-native";
import { Title, TextInput, Button, HelperText } from "react-native-paper";
import { auth } from "@/services/firebase";
import { validateEmail } from "@/utils/strings";
import { login } from "@/api/auth";
import { MIN_PASSWORD_LENGTH, MAX_PASSWORD_LENGTH } from "@/configs/constants";

const LoginScreen = ({ navigation, route }) => {
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("bottom");
      }
    });
  }, []);

  const onSubmit = async () => {
    const { email, password } = data;
    const hasEmailError = !email || !validateEmail(email);
    const hasPasswordError = !password || password.length < MIN_PASSWORD_LENGTH;
    setEmailError(hasEmailError);
    setPasswordError(hasPasswordError);
    if (hasEmailError || hasPasswordError) return;

    setLoading(true);

    // Login
    await login({ email, password });
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
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.titleSection}>
          <Title>Login</Title>
        </View>
        <View style={styles.section}>
          <TextInput
            onChangeText={(val) => onInput("email", val)}
            label="Email"
            placeholder="Please enter an email"
            mode="contained"
          />
          {emailError && (
            <HelperText type="error">An email is required</HelperText>
          )}
        </View>

        <View style={styles.section}>
          <TextInput
            onChangeText={(val) => onInput("password", val)}
            label="Password"
            placeholder="Please enter an password"
            secureTextEntry={!showPassword}
            maxLength={MAX_PASSWORD_LENGTH}
            mode="contained"
            right={
              <TextInput.Icon
                onPress={() => setShowPassword(!showPassword)}
                name={showPassword ? "eye" : "eye-off"}
              />
            }
          />
          {passwordError && (
            <HelperText type="error">{`Password must be between ${MIN_PASSWORD_LENGTH} & ${MAX_PASSWORD_LENGTH} characters`}</HelperText>
          )}
        </View>
        <Button
          style={styles.button}
          onPress={onSubmit}
          loading={loading}
          disabled={loading}
          mode="contained"
        >
          Login
        </Button>
        <Button onPress={onNavigate} uppercase={false}>
          Don't have an account? Register
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
    padding: 20,
  },
  section: {
    width: "100%",
    marginVertical: 10,
  },
  button: { width: "100%", borderRadius: 4, elevation: 3 },
  titleSection: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "100%",
  },
});
export default LoginScreen;
