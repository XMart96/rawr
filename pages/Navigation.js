import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import SignIn from './SignIn';
import HomePage from './HomePage';
import Folowing from './Folowing';
import Folowers from './Folowers';

export default class Navigation extends Component {
    render() {
        return(
            <StackNav />
        );
    }
}

const StackNav = createStackNavigator({
    SignIn: SignIn,
    Home: {
        screen: HomePage,
        navigationOptions: {
            header: null
        }
    },
    Folowing: Folowing,
    Folowers: Folowers
});
