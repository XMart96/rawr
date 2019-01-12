import React from 'react';
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Feather';

import StartPage from './pages/StartPage';
import Registration from './pages/Registration';
import SignIn from './pages/SignIn';
import HomePage from './pages/HomePage';
import Folowing from './pages/Folowing';
import Folowers from './pages/Folowers';
import FriendList from './pages/FriendList';
import Chat from './pages/Chat';
import ChatSettings from './pages/ChatSettings';

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

const AppTabNavigator = createMaterialTopTabNavigator({
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

const AppStackNavigator = createStackNavigator({
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
    screen: AppTabNavigator,
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
  Chat: Chat,
  ChatSettings: ChatSettings
});

export default function App() {
  return (
    <AppStackNavigator />
  );
}