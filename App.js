import { Provider as PaperProvider } from "react-native-paper";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Layout } from "./components/partials";
import { StyleSheet, View } from "react-native";
import { store, persistor } from "@/redux/store";

export default function App() {
  return (
    <View style={styles.container}>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <PaperProvider>
            <Layout />
          </PaperProvider>
        </PersistGate>
      </ReduxProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
