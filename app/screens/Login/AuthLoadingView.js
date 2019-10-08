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
import OneSignal from 'react-native-onesignal';

class AuthLoadingView extends React.Component {
    static navigationOptions = {
        header: null,
    };

    constructor() {
        super();
        OneSignal.init('377935ef-2ad2-40bd-9601-511f58455919');

        OneSignal.addEventListener('received', this.onReceived);
        OneSignal.addEventListener('opened', this.onOpened);
        OneSignal.addEventListener('ids', this.onIds.bind(this));
    }

    componentDidMount() {
        this._bootstrapAsync();
    }

    componentWillUnmount() {
        OneSignal.removeEventListener('received', this.onReceived);
        OneSignal.removeEventListener('opened', this.onOpened);
        OneSignal.removeEventListener('ids', this.onIds);
    }

    onReceived(notification) {
        console.log('Notification received: ', notification);
    }
    
    onOpened(openResult) {
        console.log('Message: ', openResult.notification.payload.body);
        console.log('Data: ', openResult.notification.payload.additionalData);
        console.log('isActive: ', openResult.notification.isAppInFocus);
        console.log('openResult: ', openResult);
    }
    
    onIds(device) {
        this.setState({device: device});
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = () => {

        this.props.getUserToken().then(() => {
            if(this.props.token.token){
                //Authenticate token by updating one signal id
                axios.put(`${CONSTANTS.API.UPDATE_ONE_SIGNAL_ID}/1`,{
                    user: {one_signal_id: this.state.device.userId}
                },{
                    'headers': {'Authorization': `Bearer ${this.props.token.token}`}
                }).then((response) => {
                    this.props.navigation.navigate(response.data.message ? 'App' : 'Login');
                }).catch((error) => {
                    this.props.navigation.navigate('Login');
                })
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