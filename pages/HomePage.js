import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import userInfo from './userInfo';

export default class HomePage extends Component {
    constructor() {
        super();
        this.state = {
            activeIndex: 0
        }
    }
    segmentClicked = (index) => {
        this.setState({
            activeIndex: index
        })
    }
    renderSectionZero = () => {
        return(
            <Text>Layer Tab</Text>
        );
    }
    renderSection = () => {
        if (this.state.activeIndex == 0) {
            return(
                <View>
                    {this.renderSectionZero()}
                </View>
            );
        }
    }
    render() {
        return(
            <View style={styles.main}>
                <View style={styles.profileBox}>
                    <View style={{flex: 2, alignItems: 'center'}}>
                        <Icon name='user' color='rgb(0, 206, 209)' size={100} />
                    </View>
                    <View style={{flex: 4, justifyContent: 'space-evenly'}}>
                        <View style={styles.dataLogoBox}>
                            <Icon name='user' color='rgb(0, 206, 209)' size={24} />
                            <Text style={styles.data}>{userInfo.name}</Text>
                        </View>
                        <View style={styles.dataLogoBox}>
                            <Icon name='map-pin' color='rgb(0, 206, 209)' size={24} />
                            <Text style={styles.data}>from {userInfo.country}</Text>    
                        </View>
                    </View>
                </View>
                <View style={styles.statsBox}>
                    <Text style={styles.statText}>
                        stories: {userInfo.stories}
                    </Text>
                    <Text 
                        style={styles.statText} 
                        onPress={() => this.props.navigation.navigate('Folowing')}>
                        folowing: {userInfo.folowingQuantity}
                    </Text>
                    <Text 
                        style={styles.statText} 
                        onPress={() => this.props.navigation.navigate('Folowers')}>
                        folowers: {userInfo.folowersQuantity}
                    </Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-around', margiTop: 20, paddingTop: 10, borderTopWidth: 1, borderTopColor: 'rgb(128, 128, 128)'}}>
                    <TouchableOpacity 
                        onPress={() => this.segmentClicked(0)} 
                        active={this.state.activeIndex == 0}>
                        <Icon 
                            name='layers' 
                            size={24} 
                            style={[this.state.activeIndex == 0 ? {color: color='rgb(0, 206, 209)'} : {}]} 
                        />
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => this.segmentClicked(1)} 
                        active={this.state.activeIndex == 1}>
                        <Icon 
                            name='grid' 
                            size={24} 
                            style={[this.state.activeIndex == 1 ? {color: color='rgb(0, 206, 209)'} : {}]} 
                        />
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => this.segmentClicked(2)} 
                        active={this.state.activeIndex == 2}>
                        <Icon 
                            name='heart' 
                            size={24} 
                            style={[this.state.activeIndex == 2 ? {color: color='rgb(0, 206, 209)'} : {}]} 
                        />
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => this.segmentClicked(3)} 
                        active={this.state.activeIndex == 3}>
                        <Icon 
                            name='bookmark' 
                            size={24} 
                            style={[this.state.activeIndex == 3 ? {color: color='rgb(0, 206, 209)'} : {}]} 
                        />
                    </TouchableOpacity>
                </View>
                {this.renderSection()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: 'column',
        padding: 20,
        backgroundColor: 'rgb(255, 255, 255)'
    },
    profileBox: {
        flexDirection: 'row'
    },
    dataLogoBox: {
        flexDirection: 'row'
    },  
    data: {
        marginLeft: 10,
        fontSize: 20
    },
    statsBox: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        borderTopWidth: 1,
        borderTopColor: 'rgb(128, 128, 128)'
    },
    statText: {
        margin: 5,
        fontSize: 20
    }
});