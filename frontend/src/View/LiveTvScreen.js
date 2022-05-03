import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

// import card
import Card from '../Components/LiveTvCard';

// import data
import LiveTvList from '../Utils/LiveTvList';

export default function LiveTvScreen() {
  const navigationHook = useNavigation();

  //
  const [searchText, setSearchText] = useState('');
  const [tempData, setTempData] = useState([]);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Live Tv</Text>

      <View style={styles.searchTextInputContainer}>
        <Ionicons name="search" size={30} color={'#ffe031'} />
        <TextInput
          value={searchText}
          onChangeText={text => setSearchText(text)}
          style={styles.searchTextInput}
          placeholder="Movie Name/Genre/Year"
          placeholderTextColor={'rgba(255,255,255,0.8)'}
        />
        <View></View>
      </View>

      <View style={{marginBottom: 50}}>
        <FlatList
          data={LiveTvList}
          renderItem={list => {
            return <Card channelData={list.item} />;
          }}
          numColumns={4}
        />
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

  searchTextInputContainer: {
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: '#111111',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  searchTextInput: {
    width: '80%',
    textAlign: 'center',
    color: '#fff',
  },
});
