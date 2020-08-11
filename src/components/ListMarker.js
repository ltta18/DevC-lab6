import React from "react";
import { 
  Callout, 
  Marker
} from "react-native-maps";
import { 
  View, 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
} from "react-native";
import LightboxImage from "./LightboxImage";

export default function ListMarker({ listMarker, handlePickImage, listImg }) {
  return (
    <>
    {listMarker.map((marker, i) => {
      return (
        <Marker
          coordinate={marker}
          key={i}
        >
          <Callout>
              <View style={styles.callout}>
                {listImg[i]?.uri.length > 0 
                ?
                <LightboxImage listImg={listImg} i={i} />
                :
                <View style={styles.buttonWrapper}>
                  <TouchableOpacity onPress={() => handlePickImage(i)}>
                    <Text>Choose image</Text>
                  </TouchableOpacity>
                </View>
                } 

                <View style={styles.textTitleWrapper}>
                  <Text style={styles.title}>Marker {i}</Text>
                </View>   
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
  },
  callout: {
    flex: 1, 
    width: 150,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10
  }
});