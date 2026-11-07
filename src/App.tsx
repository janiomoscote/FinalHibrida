import { Assets as NavigationAssets } from "@react-navigation/elements";
import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import { Asset } from "expo-asset";
import { createURL } from "expo-linking";
import * as SplashScreen from "expo-splash-screen";
import { StyleSheet, useColorScheme, View } from "react-native";
import { Navigation } from "./navigation";
import MapView from "react-native-maps";
import * as React from "react";

Asset.loadAsync([
  ...NavigationAssets,
  require("./assets/newspaper.png"),
  require("./assets/bell.png"),
]);

SplashScreen.preventAutoHideAsync();

const linking = {
  enabled: "auto" as const,
  prefixes: [createURL("/")],
};

export function App() {

  const [origin, setOrigin] = React.useState({
    latitude:4.692810,
    longitude:-74.079451,
  });

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: origin.latitude,
          longitude: origin.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );

  
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    map: {
      width: "100%",
      height: "100%",
    }
  }); 
