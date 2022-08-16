import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { HomeScreen, SearchScreen, AccountScreen } from "@/pages";
import { BottomNavigation, Title } from "react-native-paper";

const Bottom = () => {
  const [index, setIndex] = useState(0);
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

const styles = StyleSheet.create({});

export default Bottom;
