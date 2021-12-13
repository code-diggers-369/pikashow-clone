import React from 'react';
import {View, Text, StatusBar, StyleSheet, Image} from 'react-native';

// import logo
import LogoImg from '../../assets/logo.png';

export default function SplashScreen() {
  return (
    <View style={customStyle.container}>
      <StatusBar backgroundColor={'transparent'} translucent={true} />
      <Text style={customStyle.titleText}>Pikashow</Text>

      <Image style={customStyle.logo} source={LogoImg} />

      <Text style={customStyle.bottomText}>Made With ♥ In India</Text>
    </View>
  );
}

const customStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  titleText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  logo: {
    height: 200,
    width: 200,
  },
  bottomText: {
    color: '#fff',
  },
});
