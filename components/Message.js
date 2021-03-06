import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

export default function Message(props) {
    return(
        <View style={styles.messageBlock}>
            <View style={styles.message}>
                <Text style={styles.messageText}>{props.message}</Text>
                <Text style={styles.time}>{props.time}</Text>
            </View>
        </View>	
    );
}

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    messageBlock: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
        margin: 1,
        width: screenWidth-20
    },
	message: {
		backgroundColor: 'rgb(0, 206, 209)',
		paddingHorizontal: 10,
		paddingBottom: 6,
		paddingTop: 4,
		borderRadius: 10
    },
    messageText: {
        fontSize: 16,
        color: 'rgb(255, 255, 255)'
    },
    time: {
        fontSize: 10,
        color: 'rgb(255, 255, 255)',
        textAlign: 'right'
    }
});
