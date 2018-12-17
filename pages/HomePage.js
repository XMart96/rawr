import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import userInfo from './userInfo';
import ProfileHeader from '../components/ProfileHeader';
import ProfileHeaderStats from '../components/ProfileHeaderStats';
import ProfileBody from '../components/ProfileBody';

export default class HomePage extends Component {
    render() {
        return(
            <View style={styles.main}>
                <ProfileHeader
                    name={userInfo.name}
                    country={userInfo.country} 
                />
                <ProfileHeaderStats 
                    stories={userInfo.stories}
                    folowingQuantity={userInfo.folowingQuantity}
                    folowersQuantity={userInfo.folowersQuantity}
                    folowingPage={() => this.props.navigation.navigate('Folowing')}
                    folowersPage={() => this.props.navigation.navigate('Folowers')}
                />
                <ProfileBody />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: 'column',
        padding: 20,
        backgroundColor: 'rgb(255, 255, 255)'
    }
});