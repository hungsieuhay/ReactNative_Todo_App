import React from 'react';
import { Image, SafeAreaView, StyleSheet } from 'react-native';

export const SplashScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../../assets/images/logo.png')} style={styles.image} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#243A73',
  },
  image: {
    width: 140,
    height: 180,
  },
});
