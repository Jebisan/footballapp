import React, { useState, useEffect } from 'react';
import { Button, View, StyleSheet, Text, FlatList } from 'react-native';


const Tips = props => {

  const [favoriteFixtures, setfavoriteFixtures] = useState([]);

  useEffect(() => {
    setfavoriteFixtures([
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
      },
    ])
  });

  function Item({ title }) {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }
  

  return (
    <View style={styles.card}>
      <View>
      <FlatList
      data={favoriteFixtures}
      renderItem={({ item }) => <Item title={item.title} />}
      keyExtractor={item => item.id}
    />
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});


export default Tips;
