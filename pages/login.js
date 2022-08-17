import React, { useEffect, useState } from "react";
import { StyleSheet, KeyboardAvoidingView, View } from "react-native";
import { Title, TextInput, Button, HelperText } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { validateEmail } from "@/utils/strings";
import { login } from "@/redux/actions/auth";

const LoginScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const { me, loader } = useSelector((auth) => auth);
  useEffect(() => {
    if (me) {
      navigation.replace("bottom");
    }
  }, [me, loader]);

  const onSubmit = async () => {
    const hasEmailError = !data.email || !validateEmail(data.email);
    const hasPasswordError = !data.password;
    setEmailError(hasEmailError);
    setPasswordError(hasPasswordError);
    if (hasEmailError || hasPasswordError) return;

    // Login
    dispatch(login(data));
  };

  const onInput = (key, val) => {
    const _data = { ...data, [key]: val };
    setData(_data);
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
          />
          {passwordError && (
            <HelperText type="error">A password is required</HelperText>
          )}
        </View>
        <Button
          onPress={onSubmit}
          loading={loader}
          disabled={loader}
          mode="contained"
        >
          Login
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
