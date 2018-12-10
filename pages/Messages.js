import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Messages() {
    return(
        <View style={styles.main}>
            <Text>Messages</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'rgb(255, 255, 255)',
        height: 700
    }
});