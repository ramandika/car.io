import React, { Component } from 'react';
import CreateCarView from './CraeteCarView';

export default class CreateCarContainer extends Component {
    render() {
        return (
            <CreateCarView navigation={this.props.navigation} />
        );
    }
}