import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import {Container, Header, Content, Text, Left, Body, Right, Icon, Form, Item, Label, Input, Button} from 'native-base';
import CustomFab from '../CustomFab';
import axios from 'axios';
import CONSTANTS from '../../constants';
import {connect} from 'react-redux';
import { getUserToken } from '../../actions/actions';


class CreateCarView extends Component {
    constructor(props){
        super(props);
        this.state={showOverlay: false, form_data: {}};
        this._onSubmit = this._onSubmit.bind(this);
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

    _onSubmit = (values) => {
        axios.post(CONSTANTS.API.CREATE_CAR_URL,{car: values},{
            'headers':{
                'Authorization': `Bearer ${this.props.token.token}`,
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            Alert.alert("Sukses", `Mobil berhasil ditambahkan`, [{ text: "Ok", onPress: () => {this.props.navigation.goBack()}}], { cancelable: false });
        }).catch((error) => {
            console.log(error);
        })
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
                            <Input onChangeText={(val) => this.setState({form_data: {...this.state.form_data, name: val}})} />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Merek Mobil</Label>
                            <Input onChangeText={(val) => this.setState({form_data: {...this.state.form_data, brand: val}})}/>
                        </Item>
                        <Item floatingLabel last>
                            <Label>Tipe Mobil</Label>
                            <Input onChangeText={(val) => this.setState({form_data: {...this.state.form_data, model: val}})}/>
                        </Item>
                        <Item floatingLabel last>
                            <Label>Tahun Keluar</Label>
                            <Input onChangeText={(val) => this.setState({form_data: {...this.state.form_data, year: val}})}/>
                        </Item>
                        <Button onPress={() => this._onSubmit(this.state.form_data)} style={{alignSelf: 'center', justifyContent: 'center', marginTop: 20}}>
                            <Text>Tambah Mobil</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    token: state.token,
});

export default connect(mapStateToProps)(CreateCarView);
