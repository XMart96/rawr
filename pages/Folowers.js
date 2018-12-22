import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Folowers extends Component {
	static navigationOptions = ({navigation}) => ({
		title: `${navigation.getParam('userName')}'s folowers`,
		headerTitleStyle: {
			fontSize: 18
		}
	});
    render() {
        return(
            <View>
                <Text>Folowers</Text>
            </View>
        );
    }
}
