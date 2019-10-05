import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

const Profile = props => {
  return (
    <View style = {styles.card}>
    <Button title='Get profile!' />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    paddingTop: 250,
  }
});

export default Profile;
