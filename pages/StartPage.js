import React from 'react';
import { View, StyleSheet } from 'react-native';

import MainLogo from '../components/MainLogo';
import RegistrationButton from '../components/RegistrationButton';

export default function SignIn(props) {
    return (
        <View style={styles.main}>
            <View>
                <MainLogo />
            </View>
            <View style={styles.inputBox}>
                <RegistrationButton text='Sign In' onPress={() => props.navigation.navigate('SignIn')} />
                <RegistrationButton text='Registration' onPress={() => props.navigation.navigate('Registration')} />
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
