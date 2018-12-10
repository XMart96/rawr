import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Feather';

import userInfo from './userInfo';
import Messages from './Messages';

class HomePage extends Component {
    render() {
        return(
            <View style={styles.main}>
                <View>
                    <View style={styles.profileBox}>
                        <View style={{flex: 1}}>
                            <Image source={require('../img/user.png')} />
                        </View>
                        <View style={{flex: 1}}>
                            <Text style={styles.data}>{userInfo.name}</Text>
                            <Text style={styles.data}>from {userInfo.country}</Text>
                            <Text style={styles.data}>{userInfo.age} years</Text>
                        </View>
                    </View>
                    <View style={styles.statsBox}>
                        <Text style={styles.statText}>
                            stories: {userInfo.stories}
                        </Text>
                        <Text style={styles.statText} onPress={() => this.props.navigation.navigate('Folowing')}>
                            folowing: {userInfo.folowingQuantity}
                        </Text>
                        <Text style={styles.statText} onPress={() => this.props.navigation.navigate('Folowers')}>
                            folowers: {userInfo.folowersQuantity}
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default createMaterialTopTabNavigator({
    Home: {
        screen: HomePage,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => (
		<Icon name='home' color={tintColor} size={30} />
            )
        }
    },
    Messages: {
        screen: Messages,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => (
                <Icon name='inbox' color={tintColor} size={30} />
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

const styles = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: 'column',
        padding: 20,
        backgroundColor: 'rgb(255, 255, 255)'
    },
    profileBox: {
        flexDirection: 'row'
    },
    data: {
        fontSize: 20,
        marginBottom: 10
    },
    statsBox: {
        flexDirection: 'row',
        marginTop: 20,
        borderTopWidth: 1,
        borderTopColor: 'rgb(128, 128, 128)'
    },
    statText: {
        flex: 1,
        margin: 5,
        fontSize: 20
    }
});
