import React, {Component} from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import userInfo from './userInfo';
import FriendListItem from '../components/FriendListItem';

export default class FriendList extends Component {
    constructor() {
        super();
        this.state = {
            users: userInfo.userFriendChatList
        };
    }
    render() {
        return(
            <View style={styles.main}>
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
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'rgb(255, 255, 255)'
    }
});
