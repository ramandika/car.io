import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Login from 'app/screens/Login';
import Loading from 'app/screens/Login/LoadingContainer';
import Home from 'app/screens/Home';

const RootNavigator =  createSwitchNavigator(
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

const App = createAppContainer(RootNavigator);

export default App;
