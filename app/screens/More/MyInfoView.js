import React, { Component } from 'react';
import { View, Image } from 'react-native';
import {Container, Header, Content, Text, Left, Body, Right, Card, CardItem, Button, Icon, Label} from 'native-base';
import QrCode from '../QrCode';

export default class MyInfoView extends Component {
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
                        <QrCode value="https://www.npmjs.com/package/react-native-qrcode" />
                        <Text style={{alignSelf: 'center', marginTop: 10}}>Scan barcode untuk share location</Text>
                    </View>
                </Content>
            </Container>
        );
    }
}