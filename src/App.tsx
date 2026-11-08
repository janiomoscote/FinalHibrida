import { StyleSheet, View } from "react-native";
import MapView, {Marker, Polyline} from "react-native-maps";
import * as React from "react"
import MapViewDirections from "react-native-maps-directions";

export function App() {
  const [origin, setOrigin] = React.useState({
    latitude: 4.69281,
    longitude: -74.079451,
  });

  const [destination, setDestination] = React.useState({
    latitude: 4.686982,
    longitude: -74.074283,
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
      >
      <Marker
      draggable
      onDragEnd={(direction) => setOrigin(direction.nativeEvent.coordinate)}
      coordinate={origin}
      />
      <Marker
      draggable
      onDragEnd={(direction) => setDestination(direction.nativeEvent.coordinate)}
      coordinate={destination}
      />
      <MapViewDirections
        origin={origin}
        destination={destination}
        apikey={"AIzaSyB4Kv4nNFW4v-koue4wMtpfBzG5SP3IF8w"}
        strokeWidth={3}
        strokeColor="hotpink"
      />
      </MapView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
