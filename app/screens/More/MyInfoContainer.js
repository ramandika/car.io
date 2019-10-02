import React, { Component } from 'react';
import MyInfoView from './MyInfoView';

export default class MyInfoContainer extends Component {
    constructor(props){
        super(props);
        this.state={user: {}};
    }
    componentDidMount(){

    }

    render() {
        return (
            <MyInfoView user={this.state.user} navigation={this.props.navigation} />
        );
    }
}