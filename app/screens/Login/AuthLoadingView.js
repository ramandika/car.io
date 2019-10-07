import React from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';
import { connect } from 'react-redux';
import { getUserToken } from '../../actions/actions';
import axios from 'axios';
import CONSTANTS from '../../constants';

class AuthLoadingView extends React.Component {
    static navigationOptions = {
        header: null,
    };
    constructor() {
        super();
    }

    componentDidMount() {
        this._bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = () => {

        this.props.getUserToken().then(() => {
            if(this.props.token.token){
                //Authenticate token
                axios.get(CONSTANTS.API.USER_ME_PATH,{
                    'headers': {'Authorization': `Bearer ${this.props.token.token}`}
                }).then((response) => {
                    this.props.navigation.navigate(response.data.user ? 'App' : 'Login');
                }).catch((err) => {
                    //Error when get user profile
                    this.props.navigation.navigate('Login');
                });
            }else{
                //No token found
                this.props.navigation.navigate('Login');
            }
        }).catch(error => {
            console.log(error);
            this.setState({ error });
        });

    };

    // Render any loading content that you like here
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
});

const mapStateToProps = state => ({
    token: state.token,
});


const mapDispatchToProps = dispatch => ({
    getUserToken: () => dispatch(getUserToken()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoadingView);