import React, { Component, useState } from 'react';
import { StyleSheet, View, Button, FlatList, Text, Image, Picker } from 'react-native';
import Fixture from './Fixture';
import axios from 'axios';
import moment from 'moment';

class Fixtures extends Component {
  constructor(props) {

    super(props);
    this.state = {
      fixtures: [],
      league: 515,
      date: moment().format('YYYY-MM-DD')

    };
  }
  componentDidMount() {
    this.getFixtures(this.state.league);
  }

  getFixtures = () => {
    this.setState({ fixtures: [] })
    const url = 'https://api-football-v1.p.rapidapi.com/v2/fixtures/league/' + this.state.league + '/' + this.state.date
    axios.get(url, {
      headers: {
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        "x-rapidapi-key": "vWCVZ1AUsdmshOpeB3y1oZWN3NFbp1qCDqJjsniW3TaItON6Km"
      }
    })
      .then((response) => {
        response.data.api.fixtures.forEach(element => {
          this.setState((prevState) => ({
            fixtures: [...prevState.fixtures, {
              eventkey: element.fixture_id,
              hometeam: element.homeTeam.team_name,
              hometeamlogo: element.homeTeam.logo,
              awayteam: element.awayTeam.team_name,
              awayteamlogo: element.awayTeam.logo,
              eventtime: moment.unix(element.event_timestamp).format("DD/MM/YYYY"),
              score: element.score.fulltime
            }]
          }));
        });
      })
  }

  render() {
    return (
      <View style={styles.parent}>
        <View style={styles.header} >
          <View style={styles.picker}>
            <Picker
              selectedValue={this.state.league}
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
          </View>
        </View>
        <View style={styles.fixtures} >
          {this.state.fixtures.length === 0 ? <Image
            style={styles.loading}
            source={require('../assets/loading.gif')}
          /> :
            <FlatList
              keyExtractor={(item) => item.eventkey.toString()}
              data={this.state.fixtures}
              renderItem={itemData => (
                <Fixture
                  eventkey={itemData.item.eventkey}
                  hometeam={itemData.item.hometeam}
                  hometeamlogo={itemData.item.hometeamlogo}
                  awayteam={itemData.item.awayteam}
                  awayteamlogo={itemData.item.awayteamlogo}
                  eventtime={itemData.item.eventtime}
                  score={itemData.item.score}
                  navigation={this.props.navigation}
                />
              )}
            />}
        </View>
      </View>

    );
  }
}

export default Fixtures;

Fixtures.navigationOptions = {
  headerTitle: 'Tip en 13\'er'
}

const styles = StyleSheet.create({


  parent: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  picker: {
    paddingTop: 10,
    paddingBottom: 180,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fixtures: {
    paddingTop: 50,
    justifyContent: 'flex-start',
    alignItems: 'center',

  },

  loading: {
    width: 200,
    height: 200,


  }
});