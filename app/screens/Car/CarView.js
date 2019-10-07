import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Dimensions } from 'react-native';
import {connect} from 'react-redux';
import {Container, Header, Content, Text, Left, Body, Right, Icon, Spinner} from 'native-base';
import CustomFab from '../CustomFab';
import axios from 'axios';
import CONSTANTS from '../../constants';
import CustomRow from './CustomRow';

class CarView extends Component {
    constructor(props){
        super(props);
        this.state={showOverlay: false};
        this.refreshAfterUpdate = this.refreshAfterUpdate.bind(this);
    }

    sleep = (time) => {
        return new Promise((resolve) => setTimeout(resolve, time));
    }

    componentDidMount(){
        this.sleep(0).then(() => {
            //Get Car From Server
            axios.get(CONSTANTS.API.GET_CAR_URL,{
                headers:{
                    'Authorization': `Bearer ${this.props.token.token}`,
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                this.setState({cars: response.data.cars});
            }).catch((error) => {
                console.log(error);
            });
        });
    }

    fabOverlay(overlayState) {
        this.setState({
            showOverlay: overlayState
        });
    }

    refreshAfterUpdate(){
        this.setState({showOverlay: false});
    }


    _onPress = (item) => {
        this.props.navigation.navigate("CarDiagnostic",{id: item.user_id})
    }

    render() {
        const options = [
            {
                title: 'Tambah Mobil',
                icon: 'car',
                action_sheet_params: {
                    action: 'CreateCar', refreshAfterUpdate: this.refreshAfterUpdate
                }
            },
            {
                title: 'Scan QRCode',
                icon: 'qrcode',
                iconType: 'FontAwesome',
                action_sheet_params: {
                    action: 'ScanQR', refreshAfterUpdate: this.refreshAfterUpdate
                }
            }
        ];
        const {width, height} = Dimensions.get("window");
        return (
            <Container>
                <View>
                    <Header style={{backgroundColor: '#DF2800'}} >
                        <Left><Icon name="dots-three-vertical" type="Entypo" /></Left>
                        <Body>
                            <Text style={{color: 'white'}}>Kendaraan Anda</Text>
                        </Body>
                        <Right></Right>
                    </Header>
                </View>
                <Content>
                    {this.state.cars && this.state.cars.length > 0  && 
                        <FlatList 
                            data={this.state.cars}
                            keyExtractor={item => `${item.id}`}
                            renderItem={(item) => <CustomRow item={item} _onPress={this._onPress.bind(this)} />} 
                        />
                    }
                    {this.state.cars && this.state.cars.length === 0 && <View style={{height: height -  60*height/668, justifyContent: 'center', alignItems: 'center'}}><Text style={{marginTop: 20, width: 200, textAlign: 'center'}}>Belum ada mobil yang didaftarkan</Text></View>}
                    {!this.state.cars && <View style={{alignItems: 'center', flex: 1}}><Spinner color='#DF2800'/><Text>Memuat data anda...</Text></View>}
                </Content>
                {this.state.showOverlay && <View style={styles.overlay}/>}
                <CustomFab navigation={this.props.navigation} menu={{options: options}} fabOverlay={this.fabOverlay.bind(this)} />
            </Container>
        );
    }
}

const styles: any = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.5)'
	  }
});

const mapStateToProps = state => ({
    token: state.token,
});

export default connect(mapStateToProps)(CarView);
