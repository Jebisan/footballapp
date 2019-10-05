import React, { useState, useReducer, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, View, StyleSheet, Text, Image, TextInput } from 'react-native';
import { PREDICT } from '../store/actions/fixtures'

const Predict = props => {

  
  const [goals, setGoals] = useState('');
  const [shotsOnGoal, setShotsOnGoal] = useState('');
  const [throwIns, setThrowIns] = useState('');
  const [corners, setCorners] = useState('');
  const [freekicks, setFreekicks] = useState('');
  const [yellowCards, setYellowCards] = useState('');
  const [offsides, setOffsides] = useState('');


/*
  const [goals, setGoals] = useState(goals ? goals : '5');
  const [shotsOnGoal, setShotsOnGoal] = useState(shotsOnGoal ? shotsOnGoal : '12');
  const [throwIns, setThrowIns] = useState(throwIns ? throwins : '9');
  const [corners, setCorners] = useState(corners ? corners : '6');
  const [freekicks, setFreekicks] = useState(freekicks ? freekicks : '3');
  const [yellowCards, setYellowCards] = useState(yellowCards ? yellowCards : '2');
  const [offsides, setOffsides] = useState(offsides ? offsides : '4');

*/


   const hometeam = props.navigation.getParam('hometeam');
   const hometeamlogo = props.navigation.getParam('hometeamlogo');
   const awayteamlogo = props.navigation.getParam('awayteamlogo');
   const awayteam = props.navigation.getParam('awayteam');
   const eventdate = props.navigation.getParam('eventtime');
   const eventtime = '20.00'

   const leaguename = props.navigation.getParam('leaguename');
   const eventkey = props.navigation.getParam('eventkey');
 

 /*
  const hometeam = 'FC Barcelona';
  const hometeamlogo = 'https://worldsportlogos.com/wp-content/uploads/2018/01/Barcelona-logo.png';
  const awayteamlogo = 'https://worldsportlogos.com/wp-content/uploads/2018/01/Real-Madrid-logo.png';
  const awayteam = 'Real Madrid'
  const eventtime = '20:00'
  const eventdate = 'Today'
  const eventkey = '928364'
*/
  const dispatch = useDispatch();

  const predictHandler = () => {
    dispatch({
      type: PREDICT,
      //eventkey: (Math.floor(Math.random() * 100)).toString(),
      eventkey: eventkey,
      prediction: {
        goals: goals,
        shotsOnGoal: shotsOnGoal,
        throwIns: throwIns,
        corners: corners,
        freekicks: freekicks,
        yellowCards: yellowCards,
        offsides: offsides
      }
    }
    )
    props.navigation.goBack();
  }



  return (
    <View style={styles.container}>
      <View style={styles.header}>
            <View style={styles.teamContainer}>
                <Image style = {styles.logo} source={{ uri: hometeamlogo }} />
                <Text style = {styles.teamName}>{hometeam}</Text> 
            </View>
            <View style= {styles.eventInfo}>
            <Text style = {styles.eventDate}  > {eventdate} </Text>
            <Text style = {styles.eventTime}  > {eventtime} </Text>
            </View>
            <View style={styles.teamContainer}>
              <Image style = {styles.logo} source={{ uri: awayteamlogo }} />
              <Text style = {styles.teamName}>{awayteam}</Text> 
            </View>
      </View>

    <View style = {styles.predictionContainer} > 
      <TextInput
        style={styles.question}
        placeholder="How many goals?"
        placeholderTextColor="#abbabb"
        value={goals}
        onChangeText={(goals) => setGoals(goals)}
      />

      <TextInput
        style={styles.question}
        placeholder="How many shots on goal?"
        placeholderTextColor="#abbabb"
        value={shotsOnGoal}
        onChangeText={(shotsOnGoal) => setShotsOnGoal(shotsOnGoal)}
      />

      <TextInput
        style={styles.question}
        placeholder="How many throw-ins?"
        placeholderTextColor="#abbabb"
        value={throwIns}
        onChangeText={(throwIns) => setThrowIns(throwIns)}
      />

      <TextInput
        style={styles.question}
        placeholder="How many corners?"
        placeholderTextColor="#abbabb"
        value={corners}
        onChangeText={(corners) => setCorners(corners)}
      />

      <TextInput
        style={styles.question}
        placeholder="How many freekicks?"
        placeholderTextColor="#abbabb"
        value={freekicks}
        onChangeText={(freekicks) => setFreekicks(freekicks)}
      />

      <TextInput
        style={styles.question}
        placeholder="How many yellow cards?"
        placeholderTextColor="#abbabb"
        value={yellowCards}
        onChangeText={(yellowCards) => setYellowCards(yellowCards)}
      />

      <TextInput
        style={styles.question}
        placeholder="How many offsides?"
        placeholderTextColor="#abbabb"
        value={offsides}
        onChangeText={(offsides) => setOffsides(offsides)}
      />

      <Button title="Predict!" onPress={predictHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    paddingTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300,
/*    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',*/

  },
  eventInfo: {
    paddingTop: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  eventDate: {
    fontSize: 10
  },
  eventTime: {
    paddingTop: 3,
    fontSize: 20,
  }, 

  teamContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 70, 
    height: 70,
  },
  teamName: {
    fontSize: 10
  },

  predictionContainer: {
    alignItems: 'center',
    paddingTop: 60
  },

  question: {
    height: 40,
  }, 
});

export default Predict;
