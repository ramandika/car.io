import React, { Component } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
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
        this.sleep(10000).then(() => {
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


    _onPress = () => {
        console.log('Pressed');
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
                    {this.state.cars && 
                        <FlatList 
                            data={this.state.cars} 
                            renderItem={(item) => <CustomRow item={item} _onPress={this.props._onPress} />} 
                        />
                    }
                    {!this.state.cars && <View style={{alignItems: 'center', backgroundColor: 'yellow', flex: 1}}><Spinner color='#DF2800'/><Text>Memuat data anda</Text></View>}
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
