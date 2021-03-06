import React from 'react';
import { View, StyleSheet } from 'react-native';

import MainLogo from '../components/MainLogo';
import RegistrationInput from '../components/RegistrationInput';
import RegistrationButton from '../components/RegistrationButton';

export default function SignIn(props) {
    return (
        <View style={styles.main}>
            <View>
                <MainLogo />
            </View>
            <View style={styles.inputBox}>
                <RegistrationInput placeholder='Name' />
                <RegistrationInput placeholder='Email' />
                <RegistrationInput placeholder='Password' />
                <RegistrationButton text='Registration' onPress={() => props.navigation.navigate('Home')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fff'
    },
    inputBox: {
        width: 300
    }
});
