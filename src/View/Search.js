import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

//
import CategoryList from '../Utils/catagorys';
// import card
import Card from '../Components/MovieListCard';

export default function Search() {
  const route = useRoute();
  const {data} = route.params;

  const [searchText, setSearchText] = useState('');
  const [tempData, setTempData] = useState([]);

  useEffect(() => {
    if (searchText.length > 0) {
      filterSearchData();
    }
  }, [searchText]);

  const randomColor = () => {
    var color = 'hsl(' + Math.random() * 360 + ', 100%, 75%)';
    return color;
  };

  const filterSearchData = () => {
    const tempResult = data.filter(temp => {
      const nameTextLower = temp.name.toLowerCase();
      const searchTextLower = searchText.toLowerCase();
      if (
        nameTextLower.indexOf(searchTextLower) != -1 ||
        temp.category.includes(searchText)
      ) {
        return temp;
      }
    });
    setTempData(tempResult);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchTextInputContainer}>
        <Ionicons name="search" size={30} color={'#ffe031'} />
        <TextInput
          value={searchText}
          onChangeText={text => setSearchText(text)}
          style={styles.searchTextInput}
          placeholder="Movie Name/Genre/Year"
          placeholderTextColor={'rgba(255,255,255,0.8)'}
        />
        <Ionicons name="mic" size={30} color={'#ffe031'} />
      </View>

      {searchText.length < 1 ? (
        <View style={styles.categoryCardContainer}>
          <View style={styles.categoryCardInnerContainer}>
            {CategoryList.map((list, index) => {
              const textColor = randomColor();
              return (
                <TouchableOpacity
                  key={index}
                  style={styles.categoryCard}
                  onPress={() => setSearchText(list.name)}>
                  <Text style={[styles.categoryCardText, {color: textColor}]}>
                    {list.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      ) : (
        <View style={{marginBottom: 50}}>
          {tempData.length > 0 ? (
            <FlatList
              data={tempData}
              renderItem={list => {
                return <Card movieData={list.item} type="bollywood" />;
              }}
              numColumns={3}
            />
          ) : (
            <View>
              <Text style={styles.nodataFoundText}>No Data Found</Text>
            </View>
          )}
        </View>
      )}

      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  searchTextInputContainer: {
    marginTop: 25,
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
  categoryCardContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  categoryCardInnerContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  categoryCard: {
    backgroundColor: '#111111',
    padding: 7,
    borderRadius: 20,
    marginHorizontal: 15,
    marginVertical: 5,
  },
  categoryCardText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  nodataFoundText: {
    color: '#ffe031',
    textAlign: 'center',
    marginTop: 20,
  },
});
