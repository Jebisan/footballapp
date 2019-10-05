import React, { useState, useReducer, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, View, StyleSheet, Text, Image, TextInput } from 'react-native';
import { PREDICT } from '../store/actions/fixtures'

const Predict = props => {



  // const [value, setValue] = useState(0);



  const [goals, setGoals] = useState('');



  /* 
   const hometeam = props.navigation.getParam('hometeam');
   const hometeamlogo = props.navigation.getParam('hometeamlogo');
   const awayteamlogo = props.navigation.getParam('awayteamlogo');
   const awayteam = props.navigation.getParam('awayteam');
   const eventtime = props.navigation.getParam('eventtime');
   const leaguename = props.navigation.getParam('leaguename');
   const eventkey = props.navigation.getParam('eventkey');
 */

  const hometeam = 'FC Barcelona';
  const hometeamlogo = 'https://worldsportlogos.com/wp-content/uploads/2018/01/Barcelona-logo.png';
  const awayteamlogo = 'https://worldsportlogos.com/wp-content/uploads/2018/01/Real-Madrid-logo.png';
  const awayteam = 'Real Madrid'
  const eventtime = '20:00'
  const leaguename = 'Primera Division'
  const eventkey = '928364'


  const predictions = useSelector(state => state.predictionsReducer.predictions);

  const dispatch = useDispatch();

  const toggleFavoriteHandler = () => {
    dispatch({
      type: PREDICT, 
      eventkey: (Math.floor(Math.random() * 100)).toString(), 
      prediction: { 
        goals: goals.toString()
      }
    }
    )
    props.navigation.goBack();
  }



  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="How many goals?"
        placeholderTextColor="#abbabb"
        value={goals}
        onChangeText={(value) => setGoals(value)}
      />
      <Button title="Predict!" onPress={toggleFavoriteHandler} />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },

  card: {
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  textinput: {

    height: 40, borderColor: 'gray', borderWidth: 1

  }
});

export default Predict;
