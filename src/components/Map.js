import React, { useState } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Dimensions } from 'react-native';
import ListMarker from './ListMarker';
import * as ImagePicker from 'expo-image-picker';

export default function Map({ location }) {
  const [ listMarker, setListMarker ] = useState([])
  
  const handleLongPress = (e) => {
    if (e?.nativeEvent?.coordinate) {
      setListMarker([...listMarker, {coordinate: e.nativeEvent.coordinate, image: null}])
    }
  } 

  

  return (
      <MapView 
        style={styles.mapStyle} 
        onLongPress={(e) => handleLongPress(e)} 
        region={location}
      >
        <ListMarker listMarker={listMarker}/>
      </MapView>

  );
}

const styles = StyleSheet.create({
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});