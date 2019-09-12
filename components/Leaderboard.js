import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

const Leaderboard = props => {
  return (
    <View style = {styles.card}>
    <Button title='Leaderboard!' />
    </View>
  );
};


const styles = StyleSheet.create({
  card: {
    paddingTop: 250,
  }
});

export default Leaderboard;
