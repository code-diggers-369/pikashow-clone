import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';

export default function MovieListCard({channelData, type}) {
  return (
    <View style={styles.container}>
      <View style={styles.channelImgContainer}>
        <Image
          source={{
            uri:
              channelData.img.length > 0
                ? channelData.img
                : 'https://purepng.com/public/uploads/large/purepng.com-old-televisiontvtelecommunicationmonochromeblack-and-whittelevisionoldblack-and-whiteclipart-1421526536100hrgmw.png',
          }}
          style={styles.imagePoster}
          resizeMode={'contain'}
        />
      </View>

      <Text style={styles.channelName}>
        {channelData.name.length < 20
          ? channelData.name
          : channelData.name.slice(0, 20)}
      </Text>
    </View>
  );
}

//
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    height: height / 5,
    width: width / 4 - 14,
    margin: 7,
  },
  channelImgContainer: {
    borderRadius: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
  },
  imagePoster: {
    // height: '100%',
    // width: '100%',
    height: 60,
    width: 60,
  },
  channelName: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
