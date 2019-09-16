import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import Navigator from './navigation/Navigator';
import {useScreens} from 'react-native-screens';
import { createStore , combineReducers} from 'redux';
import fixturesReducer from './store/reducers/fixtures';
import {Provider} from 'react-redux';
import favoritesReducer from './store/reducers/FavoritesReducer.js';


export default function App() {

  useScreens();

  const rootReducer = combineReducers({
    fixtures: fixturesReducer,
    favorites: favoritesReducer
  });

  const store = createStore(rootReducer);


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
