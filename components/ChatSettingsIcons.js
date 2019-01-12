import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function ChatSettingsIcons(props) {
	return (
		<View style={styles.main}>
			<TouchableOpacity style={styles.userIcon}>
				<Icon name='user' size={25} />
			</TouchableOpacity>
			<TouchableOpacity style={{marginRight: 10}} onPress={props.onPress}>
				<Icon name='more-vertical' size={25} />
			</TouchableOpacity>
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
