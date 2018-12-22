import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export default function RegistrationButton(props) {
    return( 
        <TouchableOpacity style={styles.button} onPress={props.onPress}>
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: 'rgb(0, 206, 209)',
        padding: 15,
        marginBottom: 10,
        borderRadius: 10
    },
    text: {
        fontSize: 20,
        color: '#fff'
    }
});
