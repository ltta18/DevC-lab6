import React from "react";
import * as ImagePicker from 'expo-image-picker';
import Lightbox from 'react-native-lightbox';
import { 
  Callout, 
  Marker 
} from "react-native-maps";
import { 
  View, 
  StyleSheet, 
  Text, 
  TouchableOpacity 
} from "react-native";

export default function ListMarker({ listMarker }) {
  const handlePickImage = async(i) => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        let newListMarker = listMarker
        newListMarker[i].image = result.uri
        setListMarker(newListMarker)
      }

      console.log(result);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
    {listMarker.map((marker, i) => {
      return (
        <Marker
          coordinate={marker.coordinate}
          key={i}
        >
          <Callout 
            tooltip={false}
            alphaHitTest={true}
          >
            <View>
              <Text style={styles.title}>Marker {i}</Text>
                <TouchableOpacity style={{zIndex: 2}} onPress={() => handlePickImage(i)}>
                  <Text>Choose image</Text>
                </TouchableOpacity>
                {/* <Lightbox> */}
                  {marker.image && <Image source={{ uri: marker.image }} style={{ width: 200, height: 200 }} />}
                {/* </Lightbox> */}
            </View>
          </Callout>
        </Marker>
      )
    })}
    
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});