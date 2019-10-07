import React, { Component } from 'react';
import { View, Image } from 'react-native';
import {Container, Header, Content, Text, Left, Body, Right, Card, CardItem, Button, Icon, Label, Spinner} from 'native-base';
import QrCode from '../QrCode';
import axios from 'axios';
import CONSTANTS from '../../constants';
import { connect } from 'react-redux';

class MyInfoView extends Component {

    constructor(props){
        super(props);
        this.state={}
    }

    componentWillMount(){
        //Authenticate token
        axios.get(CONSTANTS.API.USER_ME_PATH,{
            'headers': {'Authorization': `Bearer ${this.props.token.token}`}
        }).then((response) => {
            console.log(response);
            this.setState({user: response.data.user});
        }).catch((err) => {
            //Error when get user profile
            console.log(err);
        });
    }

    render() {
        const {user} = this.props;
        const defaultPhoto = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png';
        return (
            <Container>
                <View>
                    <Header style={{backgroundColor: '#DF2800'}} >
                        <Left style={{paddingLeft: 10}}><Icon name="ios-arrow-back" type="Ionicons" onPress={() => this.props.navigation.goBack()} /></Left>
                        <Body>
                            <Text style={{color: 'white'}}>Profile Anda</Text>
                        </Body>
                        <Right></Right>
                    </Header>
                </View>
                <Content>
                    <View style={{zIndex: 1, alignItems: 'center', paddingTop: 10, paddingBottom: 10, backgroundColor: '#DF2800'}}>
                        <Text style={{color: 'white'}}>Ramandika Pranamulia</Text>
                        <Image style={{height: 65, width: 65, borderRadius: 65/2, marginTop: 10}} source={{uri: defaultPhoto}} />
                    </View>
                    <View style={{zIndex: 1, paddingLeft: 10, paddingRight: 10}}>
                        <View style={{marginTop: 10, borderBottomWidth: 1}}>
                            <Label>Email</Label>
                            <Text>r2m2ndik2@gmail.com</Text>
                        </View>
                        <View style={{marginTop: 10, borderBottomWidth: 1}}>
                            <Label>No HP</Label>
                            <Text>087886671823</Text>
                        </View>
                        <View style={{marginTop: 10, borderBottomWidth: 1}}>
                            <Label>Alamat</Label>
                            <Text>Rukan Permata Senayan - Bloak A 25, Kebayoran, Jakarta Selatan</Text>
                        </View>
                    </View>
                    <View>
                        {this.state.user && <QrCode value={JSON.stringify(this.state.user)} />}
                        {!this.state.user && <Spinner />}
                        <Text style={{alignSelf: 'center', marginTop: 10}}>Scan barcode untuk share location</Text>
                    </View>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    token: state.token,
});


export default connect(mapStateToProps)(MyInfoView);