import React, {useState} from 'react';
import { Button, View, StyleSheet, Text } from 'react-native';

const Predict = props => {
  const hometeam = props.navigation.getParam('hometeam');
  const awayteam = props.navigation.getParam('awayteam');
  const eventtime = props.navigation.getParam('eventtime');
  const leaguename = props.navigation.getParam('leaguename');


  return (
    <View >
    <Text style = {styles.card}>Hej</Text>
    <Text style = {styles.card}>{leaguename}</Text>
    <Text style = {styles.card}>{hometeam} vs {awayteam}</Text>
    <Text style = {styles.card}>{eventtime}</Text>
    <Button title = 'Predict!' onPress = {() => console.log('Predicted!')}/>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    paddingTop: 60,
    justifyContent: 'center', 
    alignItems: 'center',
    padding: 30,
  }
});

export default Predict;
