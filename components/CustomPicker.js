import React, { Component } from 'react';
import {Picker } from 'react-native';


export default class CustomPicker extends Component {
  render() {
    return (
        <Picker
        selectedValue={515/*this.state.league*/}
        style={{ height: 50, width: 100 }}
        onValueChange={(itemValue, itemIndex) =>
            this.setState({ league: itemValue }, () => { this.getFixtures() })
        }>
        <Picker.Item label="Superligaen" value="515" />
        <Picker.Item label="Premier League" value="524" />
        <Picker.Item label="Serie A" value="891" />
        <Picker.Item label="Primera Division" value="775" />
        <Picker.Item label="Bundes Liga" value="754" />
    </Picker>
    );
  }
}
