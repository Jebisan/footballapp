import React, { useState } from 'react';
import { Image, View, Text, StyleSheet, Button, TouchableOpacity, Modal } from 'react-native';
import Card from './Card';

const Fixture = props => {


  const predictHandler = () => {
    props.navigation.navigate({
      routeName: 'Predict', params: {
        eventkey: props.eventkey,
        hometeam: props.hometeam,
        hometeamlogo: props.hometeamlogo,
        awayteam: props.awayteam,
        awayteamlogo: props.awayteamlogo,
        eventtime: props.eventtime,
        leaguename: props.leaguename,
      }
    });
  }


  return (
    <TouchableOpacity onPress={predictHandler}
      style={styles.screen} >
      <View style={styles.screen}>

        <Card style={styles.cardContainer}>

           <View style={styles.cardContainer}>

              <View style={styles.teamContainer}>
                      <Image style={styles.logo} source={{ uri: props.hometeamlogo }} />
                      <Text style={styles.teamName}>{props.hometeam}</Text>
              </View>

              <View style={styles.teamContainer}>
                      <Image style={styles.logo} source={{ uri: props.awayteamlogo }} />
                      <Text style={styles.teamName}> {props.awayteam}</Text>
              </View>

           </View>

        </Card>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center'
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-between",  

  },
  teamContainer: {
    alignItems: 'center',
  },

  logo: {
    width: 50, 
    height: 50,
  },
  teamName: {
    fontSize: 10
  }

});

export default Fixture;
