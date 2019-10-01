import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    TouchableOpacity,
    Linking,
    View
} from 'react-native';

import {Container, Content, Header, Left, Icon, Body, Right} from 'native-base';
import QRCodeScanner from 'react-native-qrcode-scanner';

export default class ScanQRView extends Component {
  onSuccess = (e) => {
      Linking
          .openURL(e.data)
          .catch(err => console.error('An error occured', err));
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