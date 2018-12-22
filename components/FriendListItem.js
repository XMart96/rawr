import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function FriendListItem(props) {
    return(
        <TouchableOpacity onPress={props.onPress} style={styles.main}>
            <Icon style={styles.friendImage} name='user' size={50} />
            <Text style={styles.friendName}>{props.name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
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
        flex: 1,
        fontSize: 18,
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(128, 128, 128)'
    }
});
