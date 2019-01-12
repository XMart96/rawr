import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const renderItem = (props) => {	
	return props.stories.map((item, index) => {
		return(
			<View key={index} style={[styles.videoBox, index % 3 !== 0 ? {marginLeft: 10} : {marginLeft: 0}]}>
				<Icon style={{flex: 1}} name='user' size={100} />
			</View>
		);
	});
}

export default function GridTab(props) {
	return(
		<View style={styles.main}>
			{renderItem(props)}
		</View>
	);
}

const screenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
	main: {
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
	videoBox: {
		justifyContent: 'center',
		alignItems: 'center',
		width: (screenWidth/3)-13.4,
		height: (screenWidth/3)-13.4,
		backgroundColor: 'silver',
		marginBottom: 10,
		padding: 10,
		borderRadius: 10
	}
});