import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator } from 'react-native';
import Map from './src/components/Map';
import { LATITUDE_DELTA, LONGITUDE_DELTA } from './src/utils/Constants';
import { getRequestPermissionAsync, getCameraPermissionAsync } from './src/utils/getPermission';

export default function App() {
  const [ location, setLocation ] = useState(null);

  useEffect(() => {
    (async () => {
      await getRequestPermissionAsync();
      await getCameraPermissionAsync();

      const location = await Location.getCurrentPositionAsync({});
      const currentLocation = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      };
      setLocation(currentLocation);
    })();
  }, []);

  

  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.container}>
        {location
        ?
        <Map location={location} />
        : <ActivityIndicator size="large" />
        }
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
