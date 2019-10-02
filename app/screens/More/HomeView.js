import React, { Component } from 'react';
import {Container, Header, Content, Left, Body, Right, Switch, Text, ListItem, Icon, Button, View} from 'native-base';

export default class HomeView extends Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;
    
        return {
            tabBarVisible: true
        };
    };
      
    render() {
        return (
            <Container>
                <View>
                    <Header style={{backgroundColor: '#DF2800'}} >
                        <Left><Icon name="dots-three-vertical" type="Entypo" /></Left>
                        <Body>
                            <Text style={{color: 'white'}}>Setting</Text>
                        </Body>
                        <Right></Right>
                    </Header>
                </View>
                <Content>
                    <ListItem icon onPress={() => this.props.navigation.navigate("MyInfo")}>
                        <Left>
                            <Button style={{ backgroundColor: 'blue' }}>
                                <Icon active name="user-circle-o" type="FontAwesome" />
                            </Button>
                        </Left>
                        <Body>
                            <Text>Info pengguna</Text>
                        </Body>
                        <Right>
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Button style={{ backgroundColor: 'grey' }}>
                                <Icon active name="info" type="Feather" />
                            </Button>
                        </Left>
                        <Body>
                            <Text>Tentang Aplikasi</Text>
                        </Body>
                        <Right>
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Button>
                                <Icon active name="logout" type="SimpleLineIcons" />
                            </Button>
                        </Left>
                        <Body>
                            <Text>Logout</Text>
                        </Body>
                        <Right>
                        </Right>
                    </ListItem>
                </Content>
            </Container>
        );
    }
}