import React from 'react';
import {createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Fixture from '../components/Fixture';
import Fixtures from '../screens/Fixtures';
import PredictDashboard from '../screens/PredictDashboard';
import Profile from '../screens/Profile';
import Tips from '../screens/Tips';
import Home from '../screens/Home';
import Leaderboard from '../screens/Leaderboard';
import OneQuestionScreen from '../screens/questions/OneQuestionScreen';
import { Ionicons } from '@expo/vector-icons';

const Navigator = createStackNavigator({
    Fixtures: Fixtures,
    Fixture: Fixture,
    PredictDashboard: PredictDashboard,
    OneQuestionScreen: OneQuestionScreen,
}

);

const TabNavigator = createBottomTabNavigator({/*
'PredictDashboard': {screen: PredictDashboard, navigationOptions: {
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
},*/'Hjem': {screen: Home, navigationOptions: {
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