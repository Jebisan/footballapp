import React from 'react';
import { Button, View, StyleSheet, Text } from 'react-native';
import axios from 'axios';
import CustomPicker from '../components/CustomPicker';


const Home = props => {
  
  return (
    <View style = {styles.parent}>
      <Text style= {styles.headerText}>Welcome home!</Text>
      <CustomPicker/>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    paddingTop: 100,
    justifyContent: 'flex-start',
    alignItems: 'center',
  } ,
  headerText: {
    fontSize: 30,
    fontWeight: "bold"

  }
});

export default Home;
