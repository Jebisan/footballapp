import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, View, Button, FlatList, Text, Image } from 'react-native';
import { useSelector } from 'react-redux'
import Fixture from '../components/Fixture';
import axios from 'axios';
import moment from 'moment';
import CustomPicker from '../components/CustomPicker';
import Spinner from 'react-native-loading-spinner-overlay';

import data from './data'



const Fixtures = props => {
  const leagueId = useSelector(state => state.fixturesReducer.leagueId);
  const [today, setToday] = useState(moment().format('YYYY-MM-DD'))
  const [fixtures, setFixtures] = useState([])



  useEffect(() => {
    getFixtures()
  });

  getDate = (date) => {
    if (date === today) {
      return 'Today'
    } else {
      return date
    }
  }

  getFixtures = () => {
    //const url = 'https://api-football-v1.p.rapidapi.com/v2/fixtures/date/' + today
   // const url = 'https://api-football-v1.p.rapidapi.com/v2/fixtures/league/' + leagueId + '/' + today
    //axios.get(url, {
  //    headers: {
   //     "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
    //    "x-rapidapi-key": "vWCVZ1AUsdmshOpeB3y1oZWN3NFbp1qCDqJjsniW3TaItON6Km"
     // }
   // })
   //   .then((response) => {
   //     setFixtures(response.data.api.fixtures)
   //     console.log(response.data.api.fixtures)

  //    })

  setFixtures(data);
  }



  return (
    <View style={styles.parent}>
      <View style={styles.header} >
      </View>
      <View style={styles.fixtures} >
        {fixtures.length === 0 ? <Spinner
          color='black'
          visible={true}
          textContent={'Loading matches...'}
          textStyle={styles.spinnerTextStyle}
          size='large'
          overlayColor='rgba(0, 0, 0, 0)  '
          animation='fade'
        />

          :
          <FlatList
            keyExtractor={(item) => item.fixture_id.toString()}
            data={fixtures}
            renderItem={itemData => (
              <Fixture
                eventkey={itemData.item.fixture_id}
                hometeam={itemData.item.homeTeam.team_name}
                hometeamlogo={itemData.item.homeTeam.logo}
                awayteam={itemData.item.awayTeam.team_name}
                awayteamlogo={itemData.item.awayTeam.logo}
                eventtime={itemData.item.event_timestamp}
                score={itemData.item.score.fulltime}
                navigation={props.navigation}
              />
            )}
          />

        }
      </View>
    </View>

  );
};

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
    justifyContent: 'flex-start',
    alignItems: 'center',

  },

  loading: {
    flex: 1,
    width: 100,
    height: 100,
  },
  spinnerTextStyle: {
    color: '#000',
  },

});