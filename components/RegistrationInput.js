import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default class RegistrationInput extends Component {
    render() {
        return(
            <TextInput
                style = {styles.input}
                placeholder = {this.props.placeholder}
                placeholderTextColor = 'rgb(128, 128, 128)'
            />
        );
    }
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'rgb(227, 227, 227)',
        backgroundColor: 'rgb(227, 227, 227)',
        marginBottom: 10,
        borderRadius: 10,
        fontSize: 16,
        paddingLeft: 15
    }
});
