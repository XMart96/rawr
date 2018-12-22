import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import LayerTab from './LayerTab';
import GridTab from './GridTab';
import LikeTab from './LikeTab';
import BookmarkTab from './BookmarkTab';

export default class ProfileBody extends Component {
    constructor() {
        super();
        this.state = {
            tabIndex: 0
        }
    }
    segmentClicked = (index) => {
        this.setState({
            tabIndex: index
        })
    }
    renderSection = () => {
        switch(this.state.tabIndex) {
            case 0 : return (<LayerTab />); break;
            case 1 : return (<GridTab />); break;
            case 2 : return (<LikeTab />); break;
            case 3 : return (<BookmarkTab />); break;
        }
    }
    render() {
        return(
            <View>
                <View style={styles.main}>
                    <TouchableOpacity 
                        onPress={() => this.segmentClicked(0)} 
                        active={this.state.tabIndex == 0}>
                        <Icon 
                            name='layers' 
                            size={24} 
                            style={[this.state.tabIndex == 0 ? {color: color='rgb(0, 206, 209)'} : {}]} 
                        />
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => this.segmentClicked(1)} 
                        active={this.state.tabIndex == 1}>
                        <Icon 
                            name='grid' 
                            size={24} 
                            style={[this.state.tabIndex == 1 ? {color: color='rgb(0, 206, 209)'} : {}]} 
                        />
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => this.segmentClicked(2)} 
                        active={this.state.tabIndex == 2}>
                        <Icon 
                            name='heart' 
                            size={24} 
                            style={[this.state.tabIndex == 2 ? {color: color='rgb(0, 206, 209)'} : {}]} 
                        />
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => this.segmentClicked(3)} 
                        active={this.state.tabIndex == 3}>
                        <Icon 
                            name='bookmark' 
                            size={24} 
                            style={[this.state.tabIndex == 3 ? {color: color='rgb(0, 206, 209)'} : {}]} 
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
		flexDirection: 'row',
		justifyContent: 'space-around',
		paddingTop: 10
	}
});
