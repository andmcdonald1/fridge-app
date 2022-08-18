import { Provider as PaperProvider } from "react-native-paper";
import { Provider as StoreProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Layout } from "./components/partials";
import { StyleSheet, View } from "react-native";
import { store, persistor } from "@/redux/store";

export default function App() {
  return (
    <View style={styles.container}>
      <PaperProvider>
        <Layout />
      </PaperProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
