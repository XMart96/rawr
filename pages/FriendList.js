import React, {Component} from 'react';
import { View, ScrollView, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import userInfo from './userInfo';
import FriendListItem from '../components/FriendListItem';

export default class FriendList extends Component {
    constructor() {
        super();
        this.state = {
            users: userInfo.userFriendChatList,
            clearButtonVisible: false,
            text: ''
        };
    }

    clearButtonVisible = () => {
        if (this.state.clearButtonVisible) {
            return (
                <TouchableOpacity onPress={() => this.setState({text: ''})} style={styles.clearButton}>
                    <Icon name='x-circle' color='rgb(255, 255, 255)' size={25} />
                </TouchableOpacity>
            );
        }
    }

    render() {
        return(
            <View style={styles.main}>
                <ScrollView>
                    <View style={{flexDirection: 'row'}}>
                        <TextInput
                            style={[styles.searchInput, this.state.clearButtonVisible && styles.inputActive]}
                            placeholder='Search Friends'
                            value={this.state.text}
                            onChangeText={(text) => this.setState({text})}
                            onFocus={() => this.setState({clearButtonVisible: true})}
                            onBlur={() => this.setState({clearButtonVisible: false})}
                        />
                        {this.clearButtonVisible()}
                    </View>
                    <FlatList
                        data={this.state.users}
                        renderItem={({item}) => 
                            <FriendListItem 
                                name={item.userName}
                                onPress={() => this.props.navigation.navigate('Chat', {userName: item.userName})} 
                            />
                        }
                        keyExtractor={(item) => item.userName}
                    />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'rgb(255, 255, 255)',
	    padding: 10
    },
    searchInput: {
        flex: 6,
        borderWidth: 1,
        borderColor: 'rgb(227, 227, 227)',
        backgroundColor: 'rgb(227, 227, 227)',
        borderRadius: 10,
        fontSize: 16,
        paddingLeft: 15
    },
    clearButton: {
		flex: 1,
		backgroundColor: 'rgb(0, 206, 209)',
		justifyContent: 'center',
		alignItems: 'center',
		borderTopRightRadius: 10,
		borderBottomRightRadius: 10
    },
    inputActive: {
		borderTopRightRadius: 0,
		borderBottomRightRadius: 0
	}
});