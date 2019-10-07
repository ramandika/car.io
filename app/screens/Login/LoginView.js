import React, { Component } from 'react';
import { View, Image } from 'react-native';
import {Form, Item, Label, Input, Button, Text, Toast} from 'native-base';
import styles from './styles';
import PropTypes from 'prop-types';
import Images from '@assets/images';
import OtpInputs from './otp';
import { connect } from 'react-redux';
import { saveUserToken } from '../../actions/actions';
import axios from 'axios';
import CONSTANTS from '../../constants';

class LoginView extends Component {
    
    constructor(props){
        super(props);
        this.login = this.login.bind(this);
        this.setOtp = this.setOtp.bind(this);
        this.getOtp = this.getOtp.bind(this);
        this.state = {...props, login: this.login.bind(this),  getOtp: this.getOtp.bind(this), setOtp: this.setOtp.bind(this), phone_number: '', otp_code: ''};
    }

    login = async  (phone_number, otp_code) => {
        //console.log(`${phone_number}:${otp_code}`);
        axios.post(CONSTANTS.API.LOGIN_PATH_URL,{
            phone_number: phone_number,
            otp: otp_code,
        }).then((response)=> {
            console.log(response);
            this.props.saveUserToken(response.data.token);
            this.props.navigation.navigate('Loading');
        }).catch((error) => {
            console.log(error);
        });
    }

    getOtp = async (phone_number) => {
        axios.post(CONSTANTS.API.GET_OTP_URL,{
            phone_number: phone_number
        }).then((response) => {
            console.log(response)
            if(response.data.error){
                Toast.show({
                    text: response.data.error,
                    buttonText: "Okay",
                    duration: 5000
                })
            }else{
                this.setState({phone_number: phone_number})
            }
        }).catch((error) => {
            Toast.show({
                text: error.message,
                buttonText: "Okay",
                duration: 5000
            })
        });
    }

    setOtp = (otp) => this.setState({otp_code: otp})


    render() {
        const {phone_number, otp_code} = this.state;
        if(phone_number){
            //Phone number is already inputted, input otp code
            return (
                <View style={styles.container}>
                    <View style={{margin: 25}}>
                        <Text style={{textAlign: 'justify'}}>Kode verifikasi sudah dikirim ke no HP yang didaftarkan, silahkan masukkan kode tersebut di bawah</Text>
                        <OtpInputs setOtp={this.setOtp}/>
                        <Button style={styles.login_button} block onPress={() => this.login(phone_number, otp_code)}>
                            <Text>Lanjut</Text>
                        </Button>
                    </View>
                </View>
            );
        }else{
            //Phone number should be inputted first
            return (
                <View style={styles.container}>
                    <Image style={styles.logo} source={Images.Logo} />
                    <View>
                        <Text>Gunakan nomor HP untuk mendaftar</Text>
                        <Form>
                            <Item fixedLabel>
                                <Label>+62</Label>
                                <Input keyboardType="numeric" onChangeText={(val) => this.setState({input_phone: `0${val}`})} />
                            </Item>
                        </Form>
                        <Button style={styles.login_button} block onPress={() => this.getOtp(this.state.input_phone)}>
                            <Text>Lanjut</Text>
                        </Button>
                    </View>
                </View>
            );
        }
    }
}

LoginView.propTypes = {
    onLogin: PropTypes.func
};

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
)(LoginView);
