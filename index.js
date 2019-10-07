/** @format */

import { AppRegistry } from 'react-native';
import Entrypoint from './app/Entrypoint';
import { name as appName } from './app.json';

if(__DEV__) {
    import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

AppRegistry.registerComponent(appName, () => Entrypoint);
