import React, { Component } from 'react';
import { TextInput, View, StyleSheet, FlatList,	TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import Message from '../components/Message';

export default class Chat extends Component {
	constructor() {
		super();
		this.state = {
			items: [],
			text: '',
			sendButtonVisible: false
		};
	}
  	sendMessage = () => {
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
			<View style={styles.container}>
				<View style={styles.flatListBox}>
					<FlatList
						data={this.state.items}
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
		margin: 10
	}
});