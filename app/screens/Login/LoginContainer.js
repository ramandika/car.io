import React from 'react';
import LoginView from './LoginView';

export default class LoginContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <LoginView {...this.state} navigation={this.props.navigation} />;
    }
}