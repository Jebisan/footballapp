import React, {useState} from 'react';
import { Button, View, StyleSheet, Text } from 'react-native';

const Predict = props => {
  const hometeam = props.navigation.getParam('hometeam');
  const awayteam = props.navigation.getParam('awayteam');
  const eventtime = props.navigation.getParam('eventtime');
  const leaguename = props.navigation.getParam('leaguename');

  const predict = () => {
    props.navigation.navigate({routeName: 'Fixtures'});
  }


  return (
    <View >
    <Text style = {styles.card}>{leaguename}</Text>
    <Text style = {styles.card}>{hometeam} vs {awayteam}</Text>
    <Text style = {styles.card}>{eventtime}</Text>
    <Button title = 'Predict!' onPress = {predict}/>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    paddingTop: 30,
    justifyContent: 'center', 
    alignItems: 'center',
    padding: 10,
  }
});

export default Predict;
