import React, { Component } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import {Form, Item, Label, Input, Button, Text} from 'native-base';
import styles from './styles';
import PropTypes from 'prop-types';
import Images from '@assets/images';
import OtpInputs from './otp';

class LoginView extends Component {
    
    constructor(props){
        super(props);
    }

    navigate = () => {
        this.props.onLogin('username', 'password');
    };

    login(){
        this.props.navigation.navigate('App');
    }

    render() {
        const {login, getOtp, setOtp} = this.props;
        const {phone_number, otp_code} = this.props;
        if(phone_number){
            //Phone number is already inputted, input otp code
            return (
                <View style={styles.container}>
                    <View style={{margin: 25}}>
                        <Text style={{textAlign: 'justify'}}>Kode verifikasi sudah dikirim ke no HP yang didaftarkan, silahkan masukkan kode tersebut di bawah</Text>
                        <OtpInputs setOtp={setOtp}/>
                        <Button style={styles.login_button} block onPress={() => login(phone_number, otp_code)}>
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
                                <Input onChangeText={(val) => this.setState({input_phone: `0${val}`})} />
                            </Item>
                        </Form>
                        <Button style={styles.login_button} block onPress={() => getOtp(this.state.input_phone)}>
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

export default LoginView;
