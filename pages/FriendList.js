import React, {Component} from 'react';
import { View, Text, StyleSheet, SectionList } from 'react-native';

import FriendListItem from './FriendListItem';

export default class FriendList extends Component {
    render() {
        return(
            <View style={styles.main}>
                <SectionList
                    sections={[
                        {title: 'B', data: ['Bogdan']},
                        {title: 'E', data: ['Edo']},
                        {title: 'N', data: ['Nikita']},
                        {title: 'S', data: ['Sanya']}
                    ]}
                    renderItem={({item}) => 
			<FriendListItem 
			    name={item} 
			    onPress={() => this.props.navigation.navigate('Chat')} 
			/>
		    }
                    renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                    keyExtractor={(item, index) => index}
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
