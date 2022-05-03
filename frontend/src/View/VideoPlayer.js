import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
// At the top where our imports are...
import VideoPlayer from 'react-native-video-controls';
import {useRoute, useNavigation} from '@react-navigation/native';

export default function VideoPlayerSreen() {
  const route = useRoute();
  const navigation = useNavigation();

  const {channelData} = route.params;

  return (
    <View style={styles.container}>
      <VideoPlayer
        source={{uri: channelData.video_url}}
        title={channelData.name}
        onBack={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
