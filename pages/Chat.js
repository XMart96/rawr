import React, { Component } from 'react';
import { TextInput, View, StyleSheet, FlatList,	TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import userOutFiles from './userOutFiles';
import Message from '../components/Message';
import ChatSettingsIcons from '../components/ChatSettingsIcons';

export default class Chat extends Component {
	static navigationOptions = ({navigation}) => ({
		title: navigation.getParam('userName'),
		headerTitleStyle: {
			fontSize: 18
		},
		headerRight: (
			<ChatSettingsIcons onPress={() => navigation.navigate('ChatSettings')} />
		)
	});
	constructor() {
		super();
		this.state = {
			messages: [],
			outMessages: userOutFiles.messages,
			text: '',
			sendButtonVisible: false
		};
	}
  	sendMessage = () => {
		let message = this.state.text;
		if (message) {	
			this.state.messages.push({
				key: message,
				dateTime: this.dateTime()
			});
			this.setState({
				messages: [...this.state.messages],
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
	sendButtonVisible = () => {
		if (this.state.sendButtonVisible) {
			return(
				<TouchableOpacity style={styles.sendButton} onPress={this.sendMessage}>
					<Icon name='send' color='rgb(255, 255, 255)' size={25} />
				</TouchableOpacity>
			);
		}
	}
	render() {
		return (
			<View style={styles.main}>
				<View style={styles.flatListBox}>
					<FlatList
						data={this.state.messages}
						renderItem={({item}) =>
							<Message message={item.key} time={item.dateTime} />				
						}
					/>
				</View>
				<View style={styles.inputBox}>
					<TextInput
						style={[styles.input, this.state.sendButtonVisible && styles.inputActive]}
						value={this.state.text}
						onChangeText={(text) => this.setState({text})}
						onFocus={() => this.setState({sendButtonVisible: true})}
						onBlur={() => this.setState({sendButtonVisible: false})}
						placeholder='Write a message'
					/>
					{this.sendButtonVisible()}
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	main: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-end',
		backgroundColor: 'rgb(255, 255, 255)',
		padding: 10
	},
	inputBox: {
	 	flexDirection: 'row'
	},
	input: {
		flex: 6,
		borderColor: 'rgb(227, 227, 227)',
		backgroundColor: 'rgb(227, 227, 227)',
		borderWidth: 1,
		borderRadius: 10,
		fontSize: 16,
		paddingLeft: 15
	},
	inputActive: {
		borderTopRightRadius: 0,
		borderBottomRightRadius: 0
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
		marginBottom: 10
	}
});
