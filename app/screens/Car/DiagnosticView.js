import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
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
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
                    <MapView
                        ref={(map) => this.map = map}
                        showsUserLocation={true}
                        provider = {PROVIDER_GOOGLE}
                        style={styles.map}
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421}}>
                    </MapView>
                </View>
                {/* <Content>
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
                </Content> */}
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'white',
        shadowColor: '#000000',
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
      panel: {
        padding: 20,
        backgroundColor: 'white',
        height: '100%'
      },
      panelButton: {
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#318bfb',
        alignItems: 'center',
        marginVertical: 10,
      },
      panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
      },
      panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
        alignSelf: "center"
      },
      panelHeader: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 10,
        paddingRight: 10
      },
      panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10,
      },
      panelTitle: {
        fontSize: 27,
        height: 35,
      },
    photo: {
        height: 225,
        marginTop: 30,
        width: '100%',
    },
});