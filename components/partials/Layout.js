import React from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import { Title } from "react-native-paper";
import Bottom from "./Bottom";

const Layout = () => {
  const { width, height } = useWindowDimensions();
  const styles = StyleSheet.create({
    container: { width: width, flex: 1 },
  });
  return (
    <View style={styles.container}>
      <Bottom />
    </View>
  );
};

export default Layout;
