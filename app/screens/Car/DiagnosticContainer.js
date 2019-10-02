import React, { Component } from 'react';
import DiagnosticView from './DiagnosticView';

export default class DiagnosticContainer extends Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;
    
        return {
            tabBarVisible: false
        };
    };

    render() {
        return (
            <DiagnosticView navigation={this.props.navigation}/>
        );
    }
}