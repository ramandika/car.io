import React from 'react';
import LoginView from './LoginView';
import { connect } from 'react-redux';
import * as loginActions from 'app/actions/loginActions';

export default class LoginContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <LoginView {...this.props} />;
    }
}