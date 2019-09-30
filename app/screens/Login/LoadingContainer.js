import * as React from 'react';
import { ActivityIndicator, StatusBar, View, StyleSheet } from 'react-native';

export default class AuthLoadingScreen extends React.Component {

    sleep = (time) => {
        return new Promise((resolve) => setTimeout(resolve, time));
    }

    componentDidMount(){
        //Simulate auth check
        this.sleep(0).then((res) => {
            //Go to home or login page based on auth
            this.props.navigation.navigate("Login");
        })

    }

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
