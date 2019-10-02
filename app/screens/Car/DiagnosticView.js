import React, { Component } from 'react';
import { View, Image } from 'react-native';
import {Container, Header, Content, Text, Left, Body, Right, Separator, Icon, ListItem, Item, Label, Input} from 'native-base';

export default class DiagnosticContainer extends Component {
    render() {
        return (
            <Container>
                <View>
                    <Header style={{backgroundColor: '#DF2800'}} >
                        <Left><Icon name="arrow-back" style={{color: 'white'}} type="MaterialIcons" onPress={() => this.props.navigation.goBack()} /></Left>
                        <Body>
                            <Text style={{color: 'white'}}>Diagnostik</Text>
                        </Body>
                        <Right></Right>
                    </Header>
                </View>
                <Content>
                    <Image source={{uri: 'https://cdn1-production-images-kly.akamaized.net/FmOMEUOE0I78Bc0ntEqqjbTha4Q=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2432089/original/085299300_1542946342-kdakjasd.jpg'}} style={{height: 250, flex: 1}}/>
                    <Separator bordered>
                        <Text>Basic Info</Text>
                    </Separator>
                    <Item stackedLabel>
                        <Label>Nama Pemilik</Label>
                        <Input value="Ramandika Pranamulia" />
                    </Item>
                    <Item stackedLabel>
                        <Label>Tipe Mobil</Label>
                        <Input value="Pajero Sport 2010" />
                    </Item>
                    <Separator bordered>
                        <Text>Car Diagnostic</Text>
                    </Separator>
                    <Item stackedLabel>
                        <Label>Total KM</Label>
                        <Input value="12.432" />
                    </Item>
                    <Item stackedLabel>
                        <Label>Sisa Bensin</Label>
                        <Input value="65%" />
                    </Item>
                    <Item stackedLabel>
                        <Label>Penggunaan Bahan Bakar</Label>
                        <Input value="12.1 Km/L" />
                    </Item>
                    <Item stackedLabel>
                        <Label>Voltase Aki</Label>
                        <Input value="11.5V" />
                    </Item>
                </Content>
            </Container>
        );
    }
}