import React, { Component } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import {Container, Header, Left, Body, Text, Right, Content, List, ListItem, Icon, Button, Separator} from 'native-base';
import Images from '@assets/images';

export default class TransactionContainer extends Component {

    render() {
        return (
            <Container>
                <View>
                    <Header style={{backgroundColor: '#DF2800',flexDirection: 'column', borderBottomWidth: 0}} >
                        <Left></Left>
                        <Body><Text style={{color: 'white'}}>Transaksi Anda</Text></Body>
                        <Right></Right>
                    </Header>
                    <View style={{alignItems: 'center', justifyContent: 'center', backgroundColor: '#DF2800'}}>
                        <Text style={{color: 'white', marginBottom: 10}}>Kas Anda</Text>
                        <Text style={{color: 'white', fontSize: 20}}>Rp 15.000.000</Text>
                    </View>
                </View>
                <Content>
                    <View>
                        <List>
                            <Separator bordered>
                                <Text>7 September 2019</Text>
                            </Separator>
                            <ListItem thumbnail>
                                <Left>
                                    <Icon name="arrow-with-circle-down" type="Entypo" style={{color: 'green'}} />
                                </Left>
                                <Body>
                                    <Text>Transfer dari Mandiri</Text>
                                    <Text note numberOfLines={1}>Rp 1.000.000 (5:47 - Mandiri 27414923)</Text>
                                </Body>
                                <Right>
                                    <Button transparent>
                                        <Text>View</Text>
                                    </Button>
                                </Right>
                            </ListItem>
                            <ListItem thumbnail>
                                <Left>
                                    <Icon name="arrow-with-circle-up" type="Entypo" style={{color: 'red'}} />
                                </Left>
                                <Body>
                                    <Text>Parkir di Mall Kota Kasablanka</Text>
                                    <Text note numberOfLines={1}>Rp 25.000.000 (12:01 - 15:23)</Text>
                                </Body>
                                <Right>
                                    <Button transparent>
                                        <Text>View</Text>
                                    </Button>
                                </Right>
                            </ListItem>
                            <ListItem thumbnail>
                                <Left>
                                    <Icon name="arrow-with-circle-up" type="Entypo" style={{color: 'red'}} />
                                </Left>
                                <Body>
                                    <Text>Toll Dalam Kota</Text>
                                    <Text note numberOfLines={1}>Rp 10.000.000 (17:00 Grogol - Petamburan)</Text>
                                </Body>
                                <Right>
                                    <Button transparent>
                                        <Text>View</Text>
                                    </Button>
                                </Right>
                            </ListItem>
                            <Separator bordered>
                                <Text>6 September 2019</Text>
                            </Separator>
                            <ListItem thumbnail>
                                <Left>
                                    <Icon name="arrow-with-circle-down" type="Entypo" style={{color: 'green'}} />
                                </Left>
                                <Body>
                                    <Text>Transfer dari Mandiri</Text>
                                    <Text note numberOfLines={1}>Rp 3.000.000 (5:47 - Mandiri 27414923)</Text>
                                </Body>
                                <Right>
                                    <Button transparent>
                                        <Text>View</Text>
                                    </Button>
                                </Right>
                            </ListItem>
                            <ListItem thumbnail>
                                <Left>
                                    <Icon name="arrow-with-circle-up" type="Entypo" style={{color: 'red'}} />
                                </Left>
                                <Body>
                                    <Text>Parkir di Mall Kota Kasablanka</Text>
                                    <Text note numberOfLines={1}>Rp 25.000.000 (12:01 - 15:23)</Text>
                                </Body>
                                <Right>
                                    <Button transparent>
                                        <Text>View</Text>
                                    </Button>
                                </Right>
                            </ListItem>
                            <ListItem thumbnail>
                                <Left>
                                    <Icon name="arrow-with-circle-up" type="Entypo" style={{color: 'red'}} />
                                </Left>
                                <Body>
                                    <Text>Toll Dalam Kota</Text>
                                    <Text note numberOfLines={1}>Rp 10.000.000 (17:00 Grogol - Petamburan)</Text>
                                </Body>
                                <Right>
                                    <Button transparent>
                                        <Text>View</Text>
                                    </Button>
                                </Right>
                            </ListItem>
                        </List>
                    </View>
                </Content>
            </Container>
        );
    }
}