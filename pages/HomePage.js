import React from 'react';
import { View, StyleSheet } from 'react-native';

import userInfo from './userInfo';
import ProfileHeader from '../components/ProfileHeader';
import ProfileHeaderStats from '../components/ProfileHeaderStats';
import ProfileBody from '../components/ProfileBody';

export default function HomePage(props) {
        return(
            <View style={styles.main}>
                <ProfileHeader
                    image={userInfo.userImage}
                    name={userInfo.userName}
                    country={userInfo.userCountry} 
                />
                <ProfileHeaderStats 
                    stories={userInfo.userStories.length}
                    folowingQuantity={userInfo.userFolowing.length}
                    folowersQuantity={userInfo.userFolowers.length}
                    folowingPage={() => props.navigation.navigate('Folowing', {userName: userInfo.userName})}
                    folowersPage={() => props.navigation.navigate('Folowers', {userName: userInfo.userName})}
                />
                <ProfileBody />
            </View>
        );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: 'column',
        padding: 10,
        backgroundColor: 'rgb(255, 255, 255)'
    }
});
