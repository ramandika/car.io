import React, { Component } from 'react';
import CarView from './CarView';

export default class CarContainer extends Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;
    
        return {
            tabBarVisible: true
        };
    };
      
    render() {
        return (
            <CarView navigation={this.props.navigation} />
        );
    }
}