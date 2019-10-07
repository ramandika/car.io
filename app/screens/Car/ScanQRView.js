import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    TouchableOpacity,
    Alert,
    View
} from 'react-native';

import {Container, Content, Header, Left, Icon, Body, Right} from 'native-base';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Axios from 'axios';
import CONSTANTS from '../../constants';
import { connect } from 'react-redux';


class ScanQRView extends Component {
  onSuccess = (e) => {
      let data = JSON.parse(e.data);
      Axios.post(CONSTANTS.API.MONITORED_API_URL,data,{
          headers:{
              'Authorization': `Bearer ${this.props.token.token}`,
              'Content-Type': 'application/json'
          }
      }).then((response) => {
          Alert.alert("Sukses", `Berhasil menambahkan ke dalam daftar monitored`, [{ text: "Ok", onPress: () => {this.props.navigation.goBack()}}], { cancelable: false });
      }).catch((error)=> {
          console.log(error);
      });
  }

  willGoBack(){
      const {onGoBack} = this.props.navigation.state;
      this.props.navigation.goBack();
  }

  render() {
      return (
          <Container>
              <View>
                  <Header style={{backgroundColor: '#DF2800'}} >
                      <Left style={{paddingLeft: 10}}><Icon name="ios-arrow-back" type="Ionicons" onPress={this.willGoBack.bind(this)} /></Left>
                      <Body style={{flex: 3}}>
                          <Text style={{color: 'white'}}>SCAN QR</Text>
                      </Body>
                      <Right></Right>
                  </Header>
              </View>
              <Content>
                  <QRCodeScanner
                      onRead={this.onSuccess}  
                      topContent={
                          <View style={styles.centerText}>
                              <Text>Scan barcode device lain untuk melacak</Text>
                          </View>
                      }
                      bottomContent={
                          <TouchableOpacity style={styles.buttonTouchable}>
                              <Text style={styles.buttonText}>OK. Got it!</Text>
                          </TouchableOpacity>
                      }
                  />
              </Content>
          </Container>
      );
  }
}

const mapStateToProps = state => ({
    token: state.token,
});


export default connect(mapStateToProps)(ScanQRView);

const styles = StyleSheet.create({
    buttonText: {
        color: 'rgb(0,122,255)',
        fontSize: 21,
    },
    buttonTouchable: {
        padding: 16,
    },
    centerText: {
        color: '#777',
        flex: 1,
        fontSize: 18,
        justifyContent: 'flex-end',
        padding: 32
    },
    textBold: {
        color: '#000',
        fontWeight: '500',
    },
});