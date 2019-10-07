import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Polygon } from 'react-native-maps';
import {Container, Header, Content, Text, Left, Body, Right, Separator, Icon, ListItem, Item, Label, Input} from 'native-base';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import { Alert } from 'react-native';
import axios from 'axios';

class DiagnosticView extends Component {
    constructor(props){
        super(props);
        this.state={};
        this.GET_AREA_URL="http://192.168.1.128:8080/api/v1/areas/surrounding_areas";
        this.lastGetArea = 0;
    }

    componentDidMount(){
        this.connectToSocket();
    }

    componentWillUnmount(){
        this.disconnectSocket();
    }

    componentDidUpdate(){
        //Get All Defined Area
        let now = Date.now();
        //Get area nearby every 10 seconds
        if((now - this.lastGetArea > 10000) && !!this.state.user_location){
            console.log("GET AREA NEARBY")
            this.lastGetArea = now;
            axios.post(this.GET_AREA_URL,{
                user_location: this.state.user_location
            },{
                headers: {
                    'Authorization': `Bearer ${this.props.token.token}`
                }
            }).then((resposne) => {
                this.setState({areas: resposne.data.areas});
            }).catch((err) => {
                console.log(err);
            })
        }
    }

    connectToSocket(){
        let room = `${this.props.navigation.state.params.id}`;
        let setState = this.setState.bind(this);
        let map = this.map;
        let navigation = this.props.navigation;
        this.socket = io('http://192.168.1.128:3000', {
            secure: true,
            transports: ['websocket'],
        });
        this.socket.on('connect', () => {
            this.socket.emit('authentication', {token: this.props.token.token, room: room});
            this.socket.on('authenticated', function(socket) {
                this.on('location',(data)=>{
                    setState({user: { 
                        ...data,
                        title: `${data.tractable_device_id}`,
                        position: {latitude: parseFloat(data.latitude), longitude: parseFloat(data.longitude)},
                        description: 'Real location'
                    },user_location:{
                        latitude: parseFloat(data.latitude),
                        longitude: parseFloat(data.longitude)
                    }});
                    map.animateCamera({
                        center: {
                            latitude: parseFloat(data.latitude),
                            longitude: parseFloat(data.longitude),
                        },
                        zoom: 16
                    });
                });
                this.on('err', (data) => {
                    console.log(data);
                    Alert.alert('Error', data, [{ text: 'Ok', onPress: () => {navigation.goBack();}}], { cancelable: false });
                });
            });
        });
    }

    disconnectSocket(){
        this.socket.disconnect();
    }

    render() {
        const {user, areas} = this.state;
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
                        provider = {PROVIDER_GOOGLE}
                        style={styles.map}
                        
                        initialRegion={{
                            latitude: -6.2244345,
                            longitude: 106.8902712,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421}}>
                        {this.state.user && <Marker
                            coordinate={user.position}
                            title={user.title}
                            description={user.description}
                        />}
                        {!!areas&& areas.map(area => (<Polygon key={area.id} fillColor="rgba(0,0,0,0.06)" coordinates={area.boundaries} />))}
                    </MapView>
                    <View style={{position: 'absolute', bottom: 20, backgroundColor: 'white', width: '75%', padding: 10}}>
                        <Text>Speed: {(user || {}).speed} m/s</Text>
                        <Text>Odometer: {(user || {}).odometer} m</Text>
                        <Text>Accuracy: {(user || {}).accuracy} %</Text>
                        <Text>Battery: {(user || {}).battery_level} %</Text>
                        <Text>Battery Charging: {(user || {}).battery_is_charging ? 'Charging' : 'False'}</Text>
                    </View>
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

const mapStateToProps = state => ({
    token: state.token,
});
export default connect(mapStateToProps)(DiagnosticView);

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingTop: 20,
        shadowColor: '#000000',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    panel: {
        backgroundColor: 'white',
        height: '100%',
        padding: 20
    },
    panelButton: {
        alignItems: 'center',
        backgroundColor: '#318bfb',
        borderRadius: 10,
        marginVertical: 10,
        padding: 20,
    },
    panelButtonTitle: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
    },
    panelHandle: {
        alignSelf: 'center',
        backgroundColor: '#00000040',
        borderRadius: 4,
        height: 8,
        marginBottom: 10,
        width: 40
    },
    panelHeader: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10
    },
    panelSubtitle: {
        color: 'gray',
        fontSize: 14,
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