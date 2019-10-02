import React, { Component } from 'react';
import QRCode from 'react-native-qrcode';
 
import {
    StyleSheet,
    View,
    TextInput
} from 'react-native';
 
export default class QrCode extends Component {

    render() {
        const {value} = this.props;
        return (
            <View style={styles.container}>
                <QRCode
                    value={value}
                    size={200}
                    bgColor='purple'
                    fgColor='white'/>
            </View>
        );
    }
}
 
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        marginTop: 30
    },
 
    input: {
        borderColor: 'gray',
        borderRadius: 5,
        borderWidth: 1,
        height: 40,
        margin: 10,
        padding: 5,
    }
});