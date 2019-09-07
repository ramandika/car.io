import React, { Component } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import {Container, Header, Content, Text, Left, Body, Right, Card, CardItem, Button, Icon, Thumbnail} from 'native-base';
import Images from '@assets/images';

export default class CarContainer extends Component {

    render() {
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
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={{uri: 'data:image/jpeg;base64,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'}} />
                                <Body>
                                    <Text>Toyota Avanza</Text>
                                    <Text note>2010</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={{uri: 'https://cdn.idntimes.com/content-images/community/2019/01/veloz-white-f3a45845d0025dbe0b981e19ad57ab3e_600x400.png'}} style={{height: 200, width: null, flex: 1}}/>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent>
                                    <Icon active name="speedometer" type="MaterialCommunityIcons" />
                                    <Text>15.123 Km</Text>
                                </Button>
                            </Left>
                            <Body>
                                <Button transparent>
                                    <Icon active name="file-document" type="MaterialCommunityIcons" />
                                    <Text>15 Jan 2019</Text>
                                </Button>
                            </Body>
                            <Right>
                                <Button transparent>
                                    <Icon active name="key" type="Entypo" />
                                    <Text>11h ago</Text>
                                </Button>
                            </Right>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={{uri: 'http://www.pngmart.com/files/5/Mitsubishi-Logo-Transparent-Background.png'}} />
                                <Body>
                                    <Text>Pajero Sport</Text>
                                    <Text note>2015</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={{uri: 'https://cdn1-production-images-kly.akamaized.net/FmOMEUOE0I78Bc0ntEqqjbTha4Q=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2432089/original/085299300_1542946342-kdakjasd.jpg'}} style={{height: 200, width: null, flex: 1}}/>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent>
                                    <Icon active name="speedometer" type="MaterialCommunityIcons" />
                                    <Text>250 Km</Text>
                                </Button>
                            </Left>
                            <Body>
                                <Button transparent>
                                    <Icon active name="file-document" type="MaterialCommunityIcons" />
                                    <Text>20 Des 2024</Text>
                                </Button>
                            </Body>
                            <Right>
                                <Button transparent>
                                    <Icon active name="key" type="Entypo" />
                                    <Text>3 days ago</Text>
                                </Button>
                            </Right>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}