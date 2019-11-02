import React, {useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import moment from 'moment';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import One from '../components/questions/One';
import Two from '../components/questions/Two';
import Three from '../components/questions/Three';
import Four from '../components/questions/Four';
import Five from '../components/questions/Five';
import Six from '../components/questions/Six';
import Seven from '../components/questions/Seven';
import {togglePredict} from '../store/actions/fixtures';

const PredictDashboard = props => {

  const leagueId = useSelector(state => state.fixturesReducer.leagueId);
  const pendingGoals = useSelector(state => state.predictionsReducer.pendingGoals);
  const pendingShotsOnGoal = useSelector(state => state.predictionsReducer.pendingShotsOnGoal);
  const pendingThrowIns = useSelector(state => state.predictionsReducer.pendingThrowIns);
  const pendingCorners = useSelector(state => state.predictionsReducer.pendingCorners);
  const pendingFreekicks = useSelector(state => state.predictionsReducer.pendingFreekicks);
  const pendingYellowCards = useSelector(state => state.predictionsReducer.pendingYellowCards);
  const pendingOffsides = useSelector(state => state.predictionsReducer.pendingOffsides);


  const hometeam = props.navigation.getParam('hometeam');
  const hometeamlogo = props.navigation.getParam('hometeamlogo');
  const awayteamlogo = props.navigation.getParam('awayteamlogo');
  const awayteam = props.navigation.getParam('awayteam');
  const eventdate = moment().format('DD/MM/YYYY') === props.navigation.getParam('eventdate') ? 'Today' : props.navigation.getParam('eventdate')
  const eventtime = props.navigation.getParam('eventtime');
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


  getGoals = () => {
    return pendingGoals;
  }
 
  togglePredictHandler = () => {
    console.log(pendingGoals);

    dispatch({
      type: 'PREDICT',
      eventkey: eventkey,
      prediction: {
        goals: getGoals(),
        goals2: pendingGoals
      }
    }
    )
/*
    dispatch(togglePredict({
      type: 'PREDICT',
      eventkey: eventkey,
      prediction: {
        sup: 'sup',
        leagueId: leagueId,
        goals: pendingGoals,
        shotsOnGoal: pendingShotsOnGoal,
        throwIns: pendingThrowIns,
        corners: pendingCorners,
        freekicks: pendingFreekicks,
        yellowCards: pendingYellowCards,
        offsides: pendingOffsides
      }
    }
    )
    )*/
    props.navigation.goBack();

  };


  useEffect(() => {
    props.navigation.setParams(
      {
        eventkey: eventkey,
        togglePred: togglePredictHandler,
        pendingGoals: pendingGoals,
        pendingShotsOnGoal: pendingShotsOnGoal,
    /*    pendingCorners: pendingCorners,
        pendingFreekicks: pendingFreekicks,
        pendingOffsides: pendingOffsides,
        pendingThrowIns: pendingThrowIns,
        pendingYellowCards: pendingYellowCards
*/
      }
      );
  }, []);

  return (
    <View style={styles.parent}>
      <View style={styles.header}>
        <View style={styles.teamContainer}>
          <Image style={styles.logo} source={{ uri: hometeamlogo }} />
          <Text style={styles.teamName}>{hometeam}</Text>
        </View>
        <View style={styles.eventInfo}>
          <Text style={styles.eventDate}  > {eventdate} </Text>
          <Text style={styles.eventTime}  > {eventtime} </Text>
        </View>
        <View style={styles.teamContainer}>
          <Image style={styles.logo} source={{ uri: awayteamlogo }} />
          <Text style={styles.teamName}>{awayteam}</Text>
        </View>
      </View>

      <View style={styles.predictionContainer}>

        <ScrollView style={styles.scrollView}>
          <One 
          navigation={props.navigation}/>
          <Two />
          <Three />
          <Four />
          <Five />
          <Six />
          <Seven />
        </ScrollView>
      </View>


    </View>


  );
};

PredictDashboard.navigationOptions = navigationData => {
  const togglePredict = navigationData.navigation.getParam('togglePred');

  return {
    //headerTitle: 'hey',
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton} >
        <Item
          title='Predict'
          onPress={togglePredict}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  header: {
    paddingTop: 0,
    paddingBottom: 10,
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300,
  },


  predictionContainer: {
    paddingTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 420,
    /*
       borderRadius: 4,
       borderWidth: 0.5,
       borderColor: 'grey'
       */
  },

  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    width: 360
  },
  text: {
    fontSize: 42,
  },



  eventInfo: {
    paddingTop: 0,
    justifyContent: 'center',
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





});

export default PredictDashboard;
