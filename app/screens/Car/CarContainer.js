import React, { Component } from 'react';
import CarView from './CarView';
import BackgroundGeolocation from 'react-native-background-geolocation';
import CONSTANTS from '../../constants';
import {connect} from 'react-redux';

class CarContainer extends Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;
    
        return {
            tabBarVisible: true
        };
    };
      
    componentWillMount(){
        BackgroundGeolocation.ready({
            // Geolocation Config
            desiredAccuracy: BackgroundGeolocation.DESIRED_ACCURACY_HIGH,
            distanceFilter: 10,
            // Activity Recognition
            stopTimeout: 1,
            // Application config
            debug: false, // <-- enable this hear sounds for background-geolocation life-cycle.
            logLevel: BackgroundGeolocation.LOG_LEVEL_VERBOSE,
            stopOnTerminate: false,   // <-- Allow the background-service to continue tracking when user closes the app.
            startOnBoot: true,        // <-- Auto start tracking when device is powered-up.
            // HTTP / SQLite config
            url: CONSTANTS.API.GEOLOCATION_API_URL,
            batchSync: false,       // <-- [Default: false] Set true to sync locations to server in a single HTTP request.
            autoSync: true,         // <-- [Default: true] Set true to sync each location to server as it arrives.
            headers: {              // <-- Optional HTTP headers
                'Authorization': `Bearer ${this.props.token.token}`
            }
        }, (state) => {
            console.log('- BackgroundGeolocation is configured and ready: ', state.enabled);
      
            if (!state.enabled) {
                ////
                // 3. Start tracking!
                //
                BackgroundGeolocation.start(function() {
                    console.log('- Start success');
                });
            }
        });
    }

    // You must remove listeners when your component unmounts
    componentWillUnmount() {
        BackgroundGeolocation.removeListeners();
    }
  
    render() {
        return (
            <CarView navigation={this.props.navigation} />
        );
    }
}

const mapStateToProps = state => ({
    token: state.token,
});


export default connect(mapStateToProps)(CarContainer);