import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class ProfileHeaderStats extends Component {
    render() {
        return(
            <View style={styles.statsBox}>
                <Text style={styles.statText}>
                    stories: {this.props.stories}
                </Text>
                <Text 
                    style={styles.statText} 
                    onPress={this.props.folowingPage}>
                    folowing: {this.props.folowingQuantity}
                </Text>
                <Text 
                    style={styles.statText} 
                    onPress={this.props.folowersPage}>
                    folowers: {this.props.folowersQuantity}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    statsBox: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        borderTopWidth: 1,
        borderTopColor: 'rgb(128, 128, 128)'
    },
    statText: {
        margin: 5,
        fontSize: 20
    }
});