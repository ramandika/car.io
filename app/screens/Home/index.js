/* eslint-disable react/display-name */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Icon, Footer, FooterTab, Button} from 'native-base';
import { TabNavigator } from 'react-navigation';
import MyTransactions from '../Transaction/TransactionContainer';
import CarIndex from '../Car';
import Dimensions from 'Dimensions';

const {width, height} = Dimensions.get('window');
const bottomTabTextSize = (w) => {
    switch (true){
    case w >= 1024:
        return 15;
    case w >= 350:
        return 10;
    default:
        return 7;
    }
};

export default (HomeView = TabNavigator({
    CarIndex: {screen: CarIndex},
    MyTransactions: {screen: MyTransactions}
},{
    tabBarPosition: 'bottom',
    tabBarComponent: props => {
        return (
            <Footer style={{height: 60*height/668}}>
                <FooterTab style={{ backgroundColor: '#323337' }}>
                    <Button
                        style={{minWidth: 5}}
                        vertical 
                        onPress={() => props.navigation.navigate("CarIndex")}>
                        <Icon name="car-multiple" type="MaterialCommunityIcons" style={props.navigation.state.index === 0 ? {color: 'white'} : {color: '#D3D3D3'}} />
                        <Text style={props.navigation.state.index ===0 ? {color: 'white', fontSize: bottomTabTextSize(width)} : { color: '#D3D3D3', fontSize: bottomTabTextSize(width)}}>Daftar Mobil</Text>
                    </Button>
                    <Button
                        style={{minWidth: 5}}
                        vertical 
                        onPress={() => props.navigation.navigate("MyTransactions")}>
                        <Icon name="attach-money" type="MaterialIcons" style={props.navigation.state.index === 1 ? {color: 'white'} : {color: '#D3D3D3'}} />
                        <Text style={props.navigation.state.index ===1 ? {color: 'white', fontSize: bottomTabTextSize(width)} : { color: '#D3D3D3', fontSize: bottomTabTextSize(width)}}>Daftar Transaksi</Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}
));