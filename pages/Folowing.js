import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Folowing extends Component {
    static navigationOptions = ({navigation}) => ({
		title: `${navigation.getParam('userName')}'s folowing`,
		headerTitleStyle: {
			fontSize: 18
		}
	});
    render() {
        return(
            <View>
                <Text>Folowing</Text>
            </View>
        );
    }
}
