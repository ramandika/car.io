import { SwitchNavigator } from 'react-navigation';

import Login from 'app/screens/Login/LoginContainer';
import Loading from 'app/screens/Login/LoadingContainer';
import Home from 'app/screens/Home';

const RootNavigator =  SwitchNavigator(
    {
        Loading: Loading,
        App: {screen: Home},
        Login: {screen: Login}
    },
    {
        initialRouteName: 'Loading',
        headerMode: 'none'
    }
);


export default RootNavigator;
