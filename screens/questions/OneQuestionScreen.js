import React, {useState} from 'react';
import { View, Text, StyleSheet, Button,TextInput, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Feather';




const OneQuestionScreen = props => {
    const pendingGoals = useSelector(state => state.predictionsReducer.pendingGoals);
    dispatch = useDispatch();



    setPendingGoals = (text) => {
        dispatch({
            type: 'SET_PENDING_GOALS',
            pendingGoals: text
        })
    }

    return (
		<View style={styles.container}>
            <Text style={styles.welcome}>Goals</Text>
            <TextInput style={styles.textInput}
            onChangeText={text => setPendingGoals(text)}
            value={pendingGoals}
          />	
          	
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5
    },
    textInput: {
        width: 50,
        height: 40, 
        borderColor: 'gray', 
        borderBottomWidth: 1 ,
        alignItems: 'center',
        textAlign: 'center',
/*
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#D3D3D3'
*/
    }
});

export default OneQuestionScreen;
