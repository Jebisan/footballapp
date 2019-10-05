import React from 'react';
import { Button, View, StyleSheet, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';


const Tips = props => {

  const predictions = useSelector(state => state.predictionsReducer.predictions);

  return (
    <View style={styles.parent}>
      <View style={styles.card}>
        <View style={styles.fixtures}>
        <FlatList
              keyExtractor={(item) => item.eventkey.toString()}
              data={predictions}
              renderItem={itemData => (
               <Text>Goals: {itemData.item.prediction.goals}</Text>
              )}
            />
        </View>
      </View>
      </View>
  );
};

const styles = StyleSheet.create({


  parent: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingTop: 100,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  picker: {
    paddingTop: 10,
    paddingBottom: 180,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fixtures: {
    justifyContent: 'flex-start',
    alignItems: 'center',

  },

  loading: {
    flex:1,
    width: 100,
    height: 100
  },
  spinnerTextStyle: {
    color: '#000',
  },

});


export default Tips;