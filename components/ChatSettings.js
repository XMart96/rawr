import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function ChatSettings() {
	return (
		<View style={styles.main}>
			<Icon style={styles.userIcon} name='user' size={25} />
			<Icon style={{marginRight: 10}} name='more-vertical' size={25} />
		</View>
	);
}

const styles = StyleSheet.create({
	main: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	},
	userIcon: {
		backgroundColor: 'silver',
		marginRight: 10,
		padding: 5,
		borderRadius: 50
	}
});
