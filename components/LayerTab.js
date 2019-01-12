import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function LayerTab(props) {
	return(
		<FlatList 
			data={props.stories}
			renderItem={({item}) => 
				<View style={styles.main}>
					<View style={styles.videoBox}>
						<Icon name='user' size={300} />
					</View>
					<View style={styles.titleBox}>
						<Text>{item.storyTitle}</Text>
						<Text>{item.storySubtitle}</Text>
					</View>
				</View>
			}
			keyExtractor={(item) => item.storyTitle}
		/>
	);
}

const styles = StyleSheet.create({
	main: {
		flex: 1,
		backgroundColor: 'silver',
		marginBottom: 10,
		padding: 10,
		borderRadius: 10
	},
	videoBox: {
		alignItems: 'center'
	},
	titleBox: {
		borderWidth: 1,
		borderColor: 'gray',
		borderRadius: 10,
		padding: 10
	} 
});