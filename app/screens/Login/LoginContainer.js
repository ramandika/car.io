import React, { Component } from 'react';
import LoginView from './LoginView';
import { connect } from 'react-redux';
import { saveUserToken } from '../../actions/actions';
import axios from 'axios';
import CONSTANTS from '../../constants';

class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {...props, login: this.login.bind(this),  getOtp: this.getOtp.bind(this), setOtp: this.setOtp.bind(this), phone_number: '', otp_code: ''};
    }

    login = (phone_number, otp_code) => {
        //console.log(`${phone_number}:${otp_code}`);
        axios.post(CONSTANTS.API.LOGIN_PATH_URL,{
            phone_number: phone_number,
            otp: otp_code,
        }).then((response)=> {
            console.log(response);
            this.props.saveUserToken(response.data.token);
        }).catch((error) => {
            console.log(error);
        });
        this.props.navigation.navigate('Loading');
    }

    getOtp = (phone_number) => {
        axios.post(CONSTANTS.API.GET_OTP_URL,{
            phone_number: phone_number
        }).then((response) => {
            console.log(response);
            this.setState({phone_number: phone_number})
        }).catch((error) => {
            console.log(error);
        });
    }

    setOtp = (otp) => this.setState({otp_code: otp})

    render() {
        return <LoginView {...this.state} />;
    }
}

function mapStateToProps() {
    return {};
}
function mapDispatchToProps(dispatch) {
    return {
        saveUserToken: (userToken) => dispatch(saveUserToken(userToken))  
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer);
