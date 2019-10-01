import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import {Container, Header, Content, Text, Left, Body, Right, Icon, Form, Item, Label, Input, Button} from 'native-base';
import CustomFab from '../CustomFab';

export default class CarView extends Component {
    constructor(props){
        super(props);
        this.state={showOverlay: false};
    }

    fabOverlay(overlayState) {
        this.setState({
            showOverlay: overlayState
        });
    }

    willGoBack(){
        this.props.refreshAfterUpdate;
        this.props.navigation.goBack();
    }

    render() {
        const options = [
            {
                title: 'Tambah Mobil Pribadi',
                icon: 'car',
                action_sheet_params: {
                    action: 'CreateCar', previousPage: 'Contact', refreshAfterUpdate: this.refreshAfterUpdate
                }
            },
            {
                title: 'Scan QRCode',
                icon: 'qrcode',
                iconType: 'FontAwesome',
                action_sheet_params: {
                    action: 'ScanQR', previousPage: 'Contact', refreshAfterUpdate: this.refreshAfterUpdate
                }
            }
        ];
        return (
            <Container>
                <View>
                    <Header style={{backgroundColor: '#DF2800'}} >
                        <Left style={{paddingLeft: 10}}><Icon name="ios-arrow-back" type="Ionicons" onPress={this.willGoBack.bind(this)} /></Left>
                        <Body style={{flex: 3}}>
                            <Text style={{color: 'white'}}>Tambah Kendaraan</Text>
                        </Body>
                        <Right></Right>
                    </Header>
                </View>
                <Content>
                    <View style={{padding: 10}}>
                        <Text style={{fontSize: 14}}>Tambahkan mobil pribadi anda ke dalam daftar mobil anda di sini. Mobil yang sudah ditambahkan ke daftar kemudian dapat digunakan, dishare lokasinya (dengan sesama pengguna), dan dipantau kondisi mobilnya</Text>
                    </View>
                    <Form>
                        <Item floatingLabel>
                            <Label>Label Mobil</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Merek Mobil</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Tipe Mobil</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Tahun Keluar</Label>
                            <Input />
                        </Item>
                        <Button style={{alignSelf: 'center', justifyContent: 'center', marginTop: 20}}>
                            <Text>Tambah Mobil</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }
}
