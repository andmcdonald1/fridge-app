import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { HomeScreen, SearchScreen, AccountScreen } from "@/pages";
import { BottomNavigation } from "react-native-paper";
import { auth } from "@/services/firebase";
import { onAuthStateChanged } from "firebase/auth";

const Bottom = ({ navigation, route }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigation.replace("login");
      }
    });
  }, []);

  const [routes] = useState([
    { key: "home", title: "Home", icon: "home" },
    { key: "search", title: "Search", icon: "magnify" },
    { key: "account", title: "Account", icon: "account" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    search: SearchScreen,
    account: AccountScreen,
  });

  return (
    <BottomNavigation
      labeled={false}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Bottom;
