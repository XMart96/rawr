import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default class FriendListItem extends Component {
    render() {
        return(
            <TouchableOpacity onPress={this.props.onPress} style={styles.main}>
                <Icon style={styles.friendImage} name='user' size={45} />
                <Text style={styles.friendName}>{this.props.name}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        padding: 10
    },  
    friendImage: {
        marginRight: 20,
        backgroundColor: 'silver',
        borderRadius: 50,
        padding: 5
    },
    friendName: {
        fontSize: 18
    }
});
