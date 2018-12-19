import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default class ProfileHeader extends Component {
    render() {
        return(
            <View style={styles.profileBox}>
                <View style={styles.userImage}>
                    <Icon name='user' color='rgb(0, 206, 209)' size={100} />
                </View>
                <View style={styles.userInfo}>
                    <View style={styles.dataLogoBox}>
                        <Icon name='user' color='rgb(0, 206, 209)' size={24} />
                        <Text style={styles.data}>{this.props.name}</Text>
                    </View>
                    <View style={styles.dataLogoBox}>
                        <Icon name='map-pin' color='rgb(0, 206, 209)' size={24} />
                        <Text style={styles.data}>from {this.props.country}</Text>    
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    profileBox: {
        flexDirection: 'row'
    },
    userImage: {
        flex: 2,
        alignItems: 'center'
    },
    userInfo: {
        flex: 4,
        justifyContent: 'space-evenly'
    },
    dataLogoBox: {
        flexDirection: 'row'
    },  
    data: {
        marginLeft: 10,
        fontSize: 18
    }
});
