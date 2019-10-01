import React, { Component } from 'react';
import ScanQRView from './ScanQRView'

export default class ScanQRContainer extends Component {
    render() {
        return (
            <ScanQRView navigation={this.props.navigation} />
        );
    }
}