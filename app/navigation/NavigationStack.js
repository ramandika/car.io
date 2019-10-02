import { SwitchNavigator } from 'react-navigation';
import Loading from 'app/screens/Login/AuthLoadingContainer';
import Login from 'app/screens/Login/LoginContainer';
import Home from 'app/screens/Home';

const RootNavigator =  SwitchNavigator(
    {
        Loading: Loading,
        App: Home,
        Login: Login
    },
    {
        initialRouteName: 'Loading',
        headerMode: 'none'
    }
);


export default RootNavigator;
