import React, { Component } from 'react';
import { TextInput,
	View,
	StyleSheet,
	FlatList,
	Text,
	TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default class Chat extends Component {
	constructor() {
		super();
		this.state = {
			items: [],
			text: ''
		};
	}
  	press = () => {
		let message = this.state.text;
		if (message != '') {	
			this.state.items.push({
				key: message,
				dateTime: this.dateTime()
			});
			this.setState({
				items: [...this.state.items],
				text: ''
			});
		}
	}
	dateTime = () => {
		let date = new Date();
		addZero = (num) => {
			if(num >= 0 && num < 10) {
				return `0${num}`;
			}
			return num;
		}
		let dateTime = `${addZero(date.getHours())}:${addZero(date.getMinutes())}`;
		return(dateTime);
	}
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.flatListBox}>
					<FlatList
						data={this.state.items}
						renderItem={({item}) => 
							<View style={styles.messageBlock}>
								<Text style={styles.message}>
									{item.key}
									<Text style={{fontSize: 10}}>{item.dateTime}</Text>
								</Text>
							</View>						
						}
					/>
				</View>
				<View style={styles.inputBox}>
					<TextInput
						style={styles.input}
						value={this.state.text}
						onChangeText={text => this.setState({text})}
						placeholder='Write a message'
					/>
					<TouchableOpacity style={styles.sendButton} onPress={this.press}>
						<Icon name='send' color='rgb(255, 255, 255)' size={25} />
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-end',
		backgroundColor: 'rgb(255, 255, 255)'
	},
	inputBox: {
	 	flexDirection: 'row',
	 	margin: 10
	},
	input: {
		flex: 6,
		borderColor: 'rgb(227, 227, 227)',
		backgroundColor: 'rgb(227, 227, 227)',
		borderWidth: 1,
		borderTopLeftRadius: 10,
		borderBottomLeftRadius: 10,
		fontSize: 16,
		paddingLeft: 15
	},
	sendButton: {
		flex: 1,
		backgroundColor: 'rgb(0, 206, 209)',
		justifyContent: 'center',
		alignItems: 'center',
		borderTopRightRadius: 10,
		borderBottomRightRadius: 10
	},
	flatListBox: {
		flex: 1,
		alignItems: 'flex-end',
		margin: 10
	},
	messageBlock: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		marginTop: 2,
	},
	message: {
		fontSize: 16,
		backgroundColor: 'rgb(0, 206, 209)',
		paddingHorizontal: 10,
		paddingBottom: 6,
		paddingTop: 4,
		borderRadius: 15,
		color: '#fff'
	}
});
