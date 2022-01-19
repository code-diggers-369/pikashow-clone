import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

// import card
import Card from '../Components/MovieListCard';

// import data
import MovieList from '../Utils/SeriesList';

export default function SeriesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Series</Text>

      <View style={{marginBottom: 50}}>
        <FlatList
          data={MovieList}
          renderItem={list => {
            return <Card movieData={list.item} type="series" />;
          }}
          numColumns={3}
        />
        {/* {MovieList.map((movieData, index) => {
          return <Card />;
        })} */}
      </View>
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
});
