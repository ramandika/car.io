import React, { Component } from 'react';
import AuthLoadingView from './AuthLoadingView';

export default class AuthLoadingContainer extends Component {      
    render() {
        return (
            <AuthLoadingView navigation={this.props.navigation} />
        );
    }
}