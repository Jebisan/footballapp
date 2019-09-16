import React, { useState, useEffect } from 'react';
import { Button, View, StyleSheet, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';


const Tips = props => {

  function Item({ title }) {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }


  return (
      <View style={styles.card}>
        <View>
          <FlatList
            data={props.favorites.favorites.possible}
            renderItem={({ item }) => <Item title={item.title} />}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});


const mapStateToProps = (state) => {
  const { favorites } = state
  return { favorites }
};

export default connect(mapStateToProps)(Tips);