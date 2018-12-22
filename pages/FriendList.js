import React, {Component} from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import FriendListItem from '../components/FriendListItem';

export default class FriendList extends Component {
    constructor() {
        super();
        this.state = {
            items: [
                {key: 'Bogdan'},
                {key: 'Edo'},
                {key: 'Nikita'},
                {key: 'Sanya'}
            ]
        };
    }
    render() {
        return(
            <View style={styles.main}>
                <FlatList
                    data={this.state.items}
                    renderItem={({item}) => 
                        <FriendListItem 
                            name={item.key}
                            onPress={() => this.props.navigation.navigate('Chat')} 
                        />
		            }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'rgb(255, 255, 255)',
    },
    sectionHeader: {
        backgroundColor: 'silver',
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 10,
        fontSize: 16
    }
});
