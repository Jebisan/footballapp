import React from 'react';
import {createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Fixture from '../components/Fixture';
import Fixtures from '../components/Fixtures';
import Predict from '../components/Predict';
import Profile from '../components/Profile';
import Tips from '../components/Tips';
import Home from '../components/Home';
import Leaderboard from '../components/Leaderboard';
import { Ionicons } from '@expo/vector-icons';

const Navigator = createStackNavigator({
    Fixtures: Fixtures,
    Fixture: Fixture,
    Predict: Predict
}

);

const TabNavigator = createBottomTabNavigator({
    'Hjem': {screen: Home, navigationOptions: {
        tabBarIcon: tabInfo => {
            return (
                <Ionicons 
                name='ios-home' 
                size={25} 
                color='black' 
                />
            );
        }
    }
},
    'Tip!': {screen: Navigator, navigationOptions: {
        tabBarIcon: tabInfo => {
            return (
                <Ionicons 
                name='md-checkmark-circle' 
                size={25} 
                color='black' 
                />
            )
        }
    }
},

'Tips': {screen: Tips, navigationOptions: {
    tabBarIcon: tabInfo => {
        return (
            <Ionicons 
            name='md-checkmark-circle' 
            size={25} 
            color='black' 
            />
        )
    }
}
},
    Leaderboard: {screen: Leaderboard, navigationOptions: {
        tabBarIcon: tabInfo => {
            return (
                <Ionicons 
                name='ios-trophy' 
                size={28} 
                color='black' 
                />
            )
        }
    }
},
    Profil: {screen: Profile, navigationOptions: {
        tabBarIcon: tabInfo => {
            return (
                <Ionicons 
                name='md-person' 
                size={27} 
                color='black' 
                />
            )
        }
    }
}, 
},


);

export default createAppContainer (TabNavigator);