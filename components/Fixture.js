import React, { useState } from 'react';
import { Image, View, Text, StyleSheet, Button, TouchableOpacity, Modal } from 'react-native';
import Card from './Card';

const Fixture = props => {  

  const [predicted, setPredicted] = useState('false');

  const predictHandler = () => {
    setPredicted(true)
}


  const predictHandler2 = () => {
    props.navigation.navigate({routeName: 'Predict', params: {
      hometeam: props.hometeam,
      awayteam: props.awayteam,
      eventtime: props.eventtime,
      leaguename: props.leaguename,
    }});
  }


  return (
    <TouchableOpacity onPress={ predictHandler2}  
    style={styles.screen} >
      <View style={styles.screen}>
        <Card style={styles.fixtureContainer}>
          <View style={styles.teamsContainer}>
            <View style={styles.team}>
            <Image
            style={{width: 50, height: 50}}
            source={{uri: props.hometeamlogo}}
          />
              <Text>{props.hometeam}</Text>
            </View>
            <View>
            <View style = {styles.middleContainer}>
              <Text>{props.eventtime}</Text>
            </View>
            <View >
              <Text>{props.score}</Text>
            </View>
            </View>
            <View style={styles.team}>
            <Image
            style={{width: 50, height: 50}}
            source={{uri: props.awayteamlogo}}
          />
              <Text>{props.awayteam}</Text>
            </View>
          </View>
          {predicted===true?<Text>***PREDICTED***</Text>:null}
        </Card>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop:20,
    alignItems: 'center'
  },
  fixtureContainer: {
    width: 300,
    maxWidth: '90%',
    alignItems: 'center'
  },
  teamsContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 20
  },
  middleContainer:{
    textAlign: 'center',
    padding: 10
  },
  team: {
    flexDirection: 'column',

  },
  matchID: {
    fontSize: 16
  }

});

export default Fixture;
