import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import LinearGradient from 'react-native-linear-gradient';

// import poster data
import posterData from '../Utils/homeScreenSlideshowData';

export default function HomeScreen() {
  var bottomOptionList = ['Bollywood', 'Hollywood', 'Series', 'LiveTV'];
  var bottomrow1 = [
    {
      name: 'telegram',
      logoUrl: 'https://cdn-icons-png.flaticon.com/512/185/185977.png',
    },
    {
      name: 'youtube',
      logoUrl: 'https://cdn-icons-png.flaticon.com/512/185/185983.png',
    },
    {
      name: 'qa',
      logoUrl: 'https://cdn-icons-png.flaticon.com/512/1484/1484822.png',
    },
    {
      name: 'information',
      logoUrl: 'https://cdn-icons-png.flaticon.com/512/1028/1028917.png',
    },
  ];
  var bottomrow2 = [
    {
      name: 'share',
      logoUrl: 'https://cdn-icons-png.flaticon.com/512/469/469335.png',
    },
    {
      name: 'internet',
      logoUrl: 'https://cdn-icons-png.flaticon.com/512/457/457654.png',
    },
    {
      name: 'happyface',
      logoUrl: 'https://cdn-icons-png.flaticon.com/512/1051/1051270.png',
    },
    {
      name: 'history',
      logoUrl: 'https://cdn-icons-png.flaticon.com/512/4763/4763081.png',
    },
  ];
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'transparent'} translucent={true} />

      {/* slideshow */}
      <SwiperFlatList
        autoplay
        autoplayDelay={4}
        autoplayLoop
        data={posterData}
        renderItem={({item}) => (
          <View style={styles.childContainer}>
            <TouchableHighlight onPress={() => console.log(item)}>
              <Image
                style={styles.posterImage}
                source={{uri: item.posterUrl}}
              />
            </TouchableHighlight>
          </View>
        )}
      />

      {/* bottom menu */}

      <View style={styles.bottomContainer}>
        <LinearGradient
          colors={['transparent', '#000', '#000']}
          style={styles.linearGradient}>
          <View style={{height: '30%'}} />

          <View style={styles.botoomRowContainer}>
            <View style={styles.bottomRow}>
              {bottomrow1.map((item, index) => {
                return (
                  <Image
                    source={{uri: item.logoUrl}}
                    key={index}
                    style={styles.containerIcons}
                  />
                );
              })}
            </View>
            {/*  */}
            <View style={styles.bottomRow}>
              {bottomrow2.map((item, index) => {
                return (
                  <Image
                    source={{uri: item.logoUrl}}
                    key={index}
                    style={styles.containerIcons}
                  />
                );
              })}
            </View>
            <Text style={{color: '#fff', textAlign: 'center'}}>
              Version 100
            </Text>
          </View>

          {/*  */}
          <View style={styles.bottomNavigationContainer}>
            {bottomOptionList.map((item, index) => {
              return (
                <View>
                  <Text style={styles.bottomNavigationText}>{item}</Text>
                </View>
              );
            })}
          </View>
        </LinearGradient>
      </View>
    </View>
  );
}

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  childContainer: {
    width: width,
  },
  posterImage: {
    height: '100%',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '45%',
  },
  linearGradient: {
    flex: 1,
    paddingHorizontal: 15,
    justifyContent: 'space-around',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
  },
  containerIcons: {
    height: width / 8,
    width: width / 8,
    marginLeft: 15,
  },
  bottomNavigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  bottomNavigationText: {
    color: 'yellow',
  },
});
