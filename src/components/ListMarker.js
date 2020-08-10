import React from "react";
import Lightbox from 'react-native-lightbox';
import { 
  Callout, 
  Marker 
} from "react-native-maps";
import { 
  View, 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  Image
} from "react-native";

export default function ListMarker({ listMarker, handlePickImage, listImg }) {
  const LightboxImage = ({ uri }) => {
    return (
      // <Lightbox underlayColor="white">
        <Image
            style={styles.image}
            source={uri}
            resizeMode="contain"
        />
      // </Lightbox>
    )
  }

  return (
    <>
    {listMarker.map((marker, i) => {
      return (
        <Marker
          coordinate={marker}
          key={i}
          style={styles.marker}
          pinColor={'pink'}
        >
          <Callout onPress={() => handlePickImage(i)}>
              {console.log(listImg[i])}
              {listImg[i].uri.length > 0 ?
              <Image
                  style={styles.image}
                  source={listImg[i]}
                  resizeMode="contain"
              />
              :
              <View style={styles.buttonWrapper}>
                <TouchableOpacity onPress={() => handlePickImage(i)}>
                  <Text >Choose image</Text>
                </TouchableOpacity>
              </View>
              
              } 

              <View style={styles.textTitleWrapper}>
                <Text style={styles.title}>Marker {i}</Text>
              </View>   
          </Callout>
        </Marker>
      )
    })}
    
    </>
  )
}

const styles = StyleSheet.create({
  textTitleWrapper: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  },
  image: {
    height: 100,
    width: 100,
    backgroundColor: 'red',
  },
});