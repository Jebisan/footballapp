import React from 'react';
import { Button, View, StyleSheet, Text } from 'react-native';
import axios from 'axios';


const Home = props => {


  const getMatches = () => {
    axios.get('https://api-football-v1.p.rapidapi.com/v2/fixtures/date/2019-08-27', {
      headers: {		
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        "x-rapidapi-key": "17ca2b8fc9msh9572f6afb514c10p1917d8jsn141b09eef58d"
      }
     }).then(function (response) {
     console.log(response.data.api.fixtures)
     })
  }



  return (
    <View style = {styles.card}>
    <Button onPress = {getMatches} title='Get matches!' />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    paddingTop: 250,
  }
});

export default Home;
