import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

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
            case 0 : return (<Text>Layer Tab</Text>); break;
            case 1 : return (<Text>Grid Tab</Text>); break;
            case 2 : return (<Text>Like Tab</Text>); break;
            case 3 : return (<Text>Bookmark Tab</Text>); break;
        }
    }
    render() {
        return(
            <View>
                <View style={{flexDirection: 'row', justifyContent: 'space-around', margiTop: 20, paddingTop: 10, borderTopWidth: 1, borderTopColor: 'rgb(128, 128, 128)'}}>
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