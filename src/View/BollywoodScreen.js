import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

// import card
import Card from '../Components/MovieListCard';

// import data
import MovieList from '../Utils/BollywoodMovieList';

export default function BollywoodScreen() {
  const navigationHook = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Bollywood</Text>

      <View style={{marginBottom: 50}}>
        <FlatList
          data={MovieList}
          renderItem={list => {
            return <Card movieData={list.item} type="bollywood" />;
          }}
          numColumns={3}
        />
      </View>

      <TouchableOpacity
        style={styles.searchBottomContainer}
        onPress={() =>
          navigationHook.navigate('Search', {
            data: MovieList,
          })
        }>
        <Ionicons
          name="search"
          color={'#ffe031'}
          size={20}
          style={styles.searchicon}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  headerText: {
    color: '#ffe031',
    textAlign: 'center',
    marginTop: 20,
  },
  searchBottomContainer: {
    backgroundColor: '#111111',
    height: 60,
    width: 60,
    position: 'absolute',
    right: 10,
    bottom: 10,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchicon: {},
});
