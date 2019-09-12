import React, {Component, useState } from 'react';
import { StyleSheet, View, Button, FlatList, Text, Image, Picker } from 'react-native';
import Fixture from './Fixture';
import axios from 'axios';
import moment from 'moment';

class Fixtures extends Component {
  constructor(props) {
    
    super(props);
    this.state = {
      fixtures: [],
      country: 20,
      date: moment().format('YYYY-MM-DD')

    };
  }  
  componentDidMount(){
    this.getFixtures(20);
  }
  
  getFixtures = () => {
    this.setState({fixtures: []})
    axios.get('https://api-football-v1.p.rapidapi.com/v2/fixtures/league/'+this.state.country+'/', {
      headers: {		
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        "x-rapidapi-key": "17ca2b8fc9msh9572f6afb514c10p1917d8jsn141b09eef58d"
      }
    })
    .then((response) => {

      response.data.api.fixtures.forEach(element => {
        this.setState((prevState) => ({fixtures: [...prevState.fixtures, {
          eventkey: element.fixture_id,
          hometeam: element.homeTeam.team_name,
          hometeamlogo: element.homeTeam.logo,
          awayteam: element.awayTeam.team_name,
          awayteamlogo: element.awayTeam.logo,
          eventtime: moment.unix(element.event_timestamp,).format("DD/MM/YYYY"),                
          //leaguename: element.league_name,
          score: element.score.fulltime
        }]}));

      });
      //this.setState({fixtures: response.data.api.fixtures})

    })
  }

  render() {
    return (
      <View style={styles.parent}>
        <View style={styles.header} >
        <View style={styles.picker}>

        <Picker
          selectedValue={this.state.country}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({country: itemValue}, () => {this.getFixtures()})
          }>
          <Picker.Item label="Danmark" value="20" />
          <Picker.Item label="England" value="2" />
          <Picker.Item label="Italien" value="28" />
          <Picker.Item label="Spanien" value="30" />
          <Picker.Item label="Tyskland" value="8" />
          </Picker>

      </View>
        </View>
        <View style={styles.fixtures} >
        {this.state.fixtures.length===0?   <Image
          style={styles.loading}
          source={require('../assets/loading.gif')}
        />  :
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
             // leaguename={itemData.item.leaguename}
              score = {itemData.item.score}
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
    paddingBottom: 140,
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