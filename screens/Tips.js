import React from 'react';
import { Button, View, StyleSheet, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';


const Tips = props => {

  const predictions = useSelector(state => state.predictionsReducer.predictions);

  return (
    <View style={styles.parent}>
    <Text style={styles.header}>Predictions</Text>
        <View > 
        <View style={styles.fixtures}>
        <FlatList
              keyExtractor={(item) => item.eventkey.toString()}
              data={predictions}
              renderItem={itemData => (
            <View style={styles.prediction}>
               <Text>Eventkey: {itemData.item.eventkey}</Text>
               <Text>Goals: {itemData.item.prediction.goals}</Text>
               <Text>Shots on goal: {itemData.item.prediction.shotsOnGoal}</Text>
               <Text>Throw-ins: {itemData.item.prediction.throwIns}</Text>
               <Text>Corners: {itemData.item.prediction.corners}</Text>
               <Text>Freekicks: {itemData.item.prediction.freekicks}</Text>
               <Text>Yellow cards: {itemData.item.prediction.yellowCards}</Text> 
               <Text>Offsides: {itemData.item.prediction.offsides}</Text> 
            </View>
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
  prediction: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    padding: 20
  },
  header: {
    fontSize:24,
    fontWeight: "bold",
    paddingBottom: 50
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