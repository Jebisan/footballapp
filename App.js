import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList, Text, Image, Picker } from 'react-native';
import axios from 'axios';
import moment from 'moment';
import Navigator from './navigation/Navigator';
import {useScreens} from 'react-native-screens';
import { createStore , combineReducers} from 'redux';
import fixturesReducer from './store/reducers/fixtures';
import {Provider} from 'react-redux';

export default function App() {

  useScreens();

  const rootReducer = combineReducers({
    fixtures: fixturesReducer,
    
  });

  const store = createStore(rootReducer);

  const [fixtures, setFixtures] = useState([]);
  const [country, setCountry] = useState(34);


  const APIkey = '802ebc31f8a6b9e35c2985b03014a1701f96831530e3fed974e1ce5613678928'
  const toDate = moment().format('YYYY-MM-DD')
  const fromDate = moment().format('YYYY-MM-DD')


  const getMatchesHandler = (country) => {
    setFixtures([])
    setCountry(country)
    axios.get('https://allsportsapi.com/api/football/?met=Fixtures&APIkey=' + APIkey + '&from=' + fromDate + '&to=' + toDate + '&countryId=' + country)
      .then(function (response) {
        // handle success
        response.data.result.forEach(element => {
          setFixtures(currentFixtures => [
            ...currentFixtures, {
              eventkey: element.event_key,
              hometeam: element.event_home_team,
              awayteam: element.event_away_team,
              eventtime: element.event_time,
              leaguename: element.league_name
            }
          ]);

        });
      })
  }

  return (
   <Provider store = {store}>
   <Navigator/>
   </Provider>
  );
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
