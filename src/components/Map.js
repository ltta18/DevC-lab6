import React, { useState } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Dimensions } from 'react-native';
import ListMarker from './ListMarker';
import * as ImagePicker from 'expo-image-picker';

export default function Map({ location }) {
  const [ listMarker, setListMarker ] = useState([])
  const [ listImg, setListImg ] = useState([])
  
  const handleLongPress = (e) => {
    if (e?.nativeEvent?.coordinate) {
      setListMarker([...listMarker, e.nativeEvent.coordinate])
      setListImg([...listImg, {uri: ''}])
    }
  } 

  const handlePickImage = async(i = 0) => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
      if (!result.cancelled) {
        const newList = [...listImg]
        newList[i] = {uri: result.uri};
        setListImg(newList)
      }
    } catch (e) {
      console.log(e);
    }
  };
  

  return (
      <MapView 
        style={styles.mapStyle} 
        onLongPress={(e) => handleLongPress(e)} 
        initialRegion={location}
        provider={"google"}
      >
        <ListMarker listMarker={listMarker} handlePickImage={handlePickImage} listImg={listImg}/>
      </MapView>

  );
}

const styles = StyleSheet.create({
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});