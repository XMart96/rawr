import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProfileHeaderStats(props) {
    return(
        <View style={styles.statsBox}>
            <Text style={styles.statText}>
                stories: {props.storiesQuantity}
            </Text>
            <Text 
                style={styles.statText} 
                onPress={props.folowingPage}>
                folowing: {props.folowingQuantity}
            </Text>
            <Text 
                style={styles.statText} 
                onPress={props.folowersPage}>
                folowers: {props.folowersQuantity}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    statsBox: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        borderTopWidth: 1,
	    borderBottomWidth: 1,
        borderTopColor: 'rgb(128, 128, 128)',
        borderBottomColor: 'rgb(128, 128, 128)'
    },
    statText: {
        margin: 5,
        fontSize: 16
    }
});