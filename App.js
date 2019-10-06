import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import Navigator from './navigation/Navigator';
import {useScreens} from 'react-native-screens';
import { createStore , combineReducers} from 'redux';
import {Provider} from 'react-redux';
import predictionsReducer from './store/reducers/predictionsReducer.js';
import fixturesReducer from './store/reducers/fixturesReducer.js';
import {composeWithDevTools} from 'redux-devtools-extension';


export default function App() {
  
  useScreens();

  const rootReducer = combineReducers({
    predictionsReducer: predictionsReducer,
    fixturesReducer: fixturesReducer
  });

  const store = createStore(rootReducer, composeWithDevTools()); 


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
