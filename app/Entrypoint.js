/**
 * React Native App
 * Everthing starts from the entrypoint
 */
import React, { Component} from 'react';
import {Root} from "native-base";
import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import Navigator from 'app/navigation';
import configureStore from 'app/store/configureStore';
const { persistor, store } = configureStore();

export default class Entrypoint extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: false,
            store: configureStore(() => this.setState({ isLoading: false }))
        };
    }

    render() {
        return (
            <Provider store={this.state.store}>
                <Root>
                    <Navigator />
                </Root>
            </Provider>
        );
    }
}
