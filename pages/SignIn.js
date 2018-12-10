import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

export default class SignIn extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View style={styles.main}>
                <View>
                    <Image source={require('../img/logo.png')}/>
                </View>
                <View style={styles.inputBox}>
                    <View style={styles.chooseBox}>
                        <TouchableOpacity style={styles.chooseBtn}>
                            <Text style={{fontSize: 20, color: 'rgb(128, 128, 128)'}}>Sign In</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.chooseBtn}>
                            <Text style={{fontSize: 20, color: 'rgb(128, 128, 128)'}}>Registration</Text>
                        </TouchableOpacity>
                    </View>
                    <TextInput
                        style = {styles.input}
                        placeholder = 'Email'
                        placeholderTextColor = 'rgb(128, 128, 128)'
                        keyboardType = 'email-address'
                    />
                    <TextInput
                        style = {styles.input}
                        placeholder = 'Password'
                        placeholderTextColor = 'rgb(128, 128, 128)'
                        keyboardType = 'visible-password'
                    />
                    <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('Home')}>
                        <Text style={{fontSize: 20, color: '#fff'}}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff'
    },
    inputBox: {
        width: 300
    },
    chooseBox: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 10
    },
    chooseBtn: {
        marginRight: 20
    },
    input: {
        borderWidth: 1,
        borderColor: 'rgb(227, 227, 227)',
        backgroundColor: 'rgb(227, 227, 227)',
        marginBottom: 10,
        borderRadius: 10,
        fontSize: 15,
        paddingLeft: 15
    },
    btn: {
        alignItems: 'center',
        backgroundColor: 'rgb(0, 206, 209)',
        padding: 15,
        borderRadius: 10
    }
});