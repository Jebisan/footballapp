import React, { useState, useEffect } from 'react';
import { Picker, View, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';



const CustomPicker = props => {

  const leagueId = useSelector(state => state.fixturesReducer.leagueId);

  dispatch = useDispatch();

  setLeague = (league) => {
    dispatch({
      type: 'SET_LEAGUE',
      leagueId: league
    }
    )
  };



  return (
    <View>
      <Picker
        selectedValue={leagueId}
        style={{ height: 150, width: 200 }}
        onValueChange={(itemValue, itemIndex) => {setLeague(itemValue)}}>
        <Picker.Item label="Superligaen" value="515" />
        <Picker.Item label="Premier League" value="524" />
        <Picker.Item label="Serie A" value="891" />
        <Picker.Item label="Primera Division" value="775" />
        <Picker.Item label="Bundes Liga" value="754" />
      </Picker>
    </View>
  );
};


export default CustomPicker;