import React from "react";
import Lightbox from 'react-native-lightbox';
import Carousel from 'react-native-looped-carousel';
import { Image, StyleSheet } from "react-native";
import { WINDOW_WIDTH } from '../utils/Constants';

export default function LightboxImage({ listImg, i }) {
  const renderCarousel = (source) => (
    <Carousel style={styles.carousel}>
      <Image
        style={{ flex: 1 }}
        resizeMode="contain"
        source={source}
      />
    </Carousel>
  )

  return (
    <Lightbox underlayColor="white" renderCarousel={() => renderCarousel(listImg[i])}>
      <Image
          style={styles.image}
          source={listImg[i]}
          resizeMode="contain"
      />
    </Lightbox>
  )
}

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
  },
  carousel: {
    width: WINDOW_WIDTH, 
    height: WINDOW_WIDTH,
  }
});