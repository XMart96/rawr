import React from 'react';
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Feather';

import StartPage from './StartPage';
import Registration from './Registration';
import SignIn from './SignIn';
import HomePage from './HomePage';
import Folowing from './Folowing';
import Folowers from './Folowers';
import FriendList from './FriendList';
import Chat from './Chat';

FriendList.navigationOptions = ({navigation}) => {
    let tabBarVisible = true;
    let swipeEnabled = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
        swipeEnabled = false
    }
    return {
        tabBarVisible,
        swipeEnabled
    }
}

const homeTabNavigator = createMaterialTopTabNavigator({
    Home: {
        screen: HomePage,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => (
		        <Icon name='home' color={tintColor} size={25} />
            )
        }
    },
    FriendList: {
        screen: FriendList,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => (
                <Icon name='inbox' color={tintColor} size={25} />
            )
        }
    }
}, {
    tabBarPosition: 'bottom',
    tabBarOptions: {
        activeTintColor: 'rgb(0, 206, 209)',
        inactiveTintColor: 'rgb(128, 128, 128)',
        showIcon: true,
        showLabel: false,
        style: {
            backgroundColor: 'rgb(255, 255, 255)'
        },
        indicatorStyle: {
            height: 0 
        }
    }
});

export default createStackNavigator({
    StartPage: {
        screen: StartPage,
        navigationOptions: {
            header: null
        }
    },
    SignIn: {
        screen: SignIn,
        navigationOptions: {
            header: null
        }
    },
    Registration: {
        screen: Registration,
        navigationOptions: {
            header: null
        }
    },
    Home: {
        screen: homeTabNavigator,
        navigationOptions: {
            header: null
        }
    },
    Folowing: Folowing,
    Folowers: Folowers,
    FriendList: {
	    screen: FriendList,
	    navigationOptions: {
	        header: null
	    }
    },
    Chat: Chat
});
