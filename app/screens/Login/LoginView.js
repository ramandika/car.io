import React, { Component } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import {Form, Item, Label, Input, Button, Text} from 'native-base';
import styles from './styles';
import PropTypes from 'prop-types';
import Images from '@assets/images';

class LoginView extends Component {
    navigate = () => {
        this.props.onLogin('username', 'password');
    };

    login(){
        this.props.navigation.navigate("App")
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.logo} source={Images.Logo} />
                <View>
                    <Text>Gunakan nomor HP untuk mendaftar</Text>
                    <Form>
                        <Item fixedLabel>
                            <Label>+62</Label>
                            <Input />
                        </Item>
                    </Form>
                    <Button style={styles.login_button} block onPress={() => this.login()}>
                        <Text>Lanjut</Text>
                    </Button>
                </View>
            </View>
        );
    }
}

LoginView.propTypes = {
    onLogin: PropTypes.func
};

export default LoginView;
