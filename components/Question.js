import React, {useState} from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';



const Question = props => {

    return (
      <View style= {styles.predictionContainer}>
        <View style={styles.questionContainer}>
        <View style={styles.leftTextContainer} >
          <Text style={styles.questionText1}>Question {props.questionNumber}</Text>
          <Text style={styles.questionText2}>{props.questionText}</Text>
        </View>
        <View style={styles.rightTextContainer} >  
          <TextInput style = {styles.textInput}
          placeholder=""
          placeholderTextColor="#abbabb"
          value={props.goals}
          onChangeText={ text => props.setGoals(text)}
          keyboardType= 'numeric'
        />
        </View>
      </View>
      <View>
      <Text></Text>
    </View>
    </View>
    )
}


const styles = StyleSheet.create({
 
  predictionContainer: {
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    
    width:320
/*
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'grey'*/
        
  },



  eventInfo: {
    paddingTop: 20,
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

  questionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    width: 300
  },
  leftTextContainer: {

  },
  rightTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    
    
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#D3D3D3'
    

  },

  questionText1: {
    color: 'grey',
    fontSize: 10,
    paddingBottom: 5,

  },
  questionText2: {
    fontSize: 16,
    paddingBottom: 5,
  },

  questionText3: {
    color: '#C0C0C0',
    fontSize: 26,
  },

  textInput: {
    color: '#C0C0C0',
    fontSize: 26,
    width: 35,
    height: 35,
    textAlign: 'center'
    
  }






});

export default Question;