import React, { Component } from 'react';
import { TextInput,
	View,
	Button,
	StyleSheet,
	FlatList,
	Text
} from 'react-native';

export default class Chat extends Component {
	constructor() {
		super();
		this.state = {
			items: [
				{key: 'arajin'},
				{key: 'ddd'},
				{key: 'ddrd'},
				{key: 'dxdd'},
				{key: 'ddd'},
				{key: 'ddfd'},
				{key: 'dddd'},
				{key: 'dfdd'},
				{key: 'ddd'},
				{key: 'ddd'},
				{key: 'dfdd'},
				{key: 'ddd'},
				{key: 'verjin'},
			],
			text: ''
		};
		this.press=this.press.bind(this);
		this.focus=this.focus.bind(this);
	}
  	press() {
		let message = this.state.text;
		if (message != '') {	
			this.state.items.push({key: message});
			this.setState({
				items: [...this.state.items],
				text: ''
			});
		}
	}
	focus() {
		//alert('focus');
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
						onFocus={this.focus}
						placeholder='Введите сообщение'
					/>
					<Button
						title='Send'
						onPress={this.press}
					/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-end'
	},
	inputBox: {
	 	flexDirection: 'row',
	 	margin: 10
	},
	input: {
		flex: 1,
		borderColor: 'black',
		borderWidth: 1
	},
	flatListBox: {
		flex: 1,
		alignItems: 'flex-end',
		margin: 10
	},
	messageBlock: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		marginTop: 2
	},
	message: {
		fontSize: 20,
		backgroundColor: 'blue',
		padding: 10,
		borderRadius: 20,
		color: '#fff'
	}
});
