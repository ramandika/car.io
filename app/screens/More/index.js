import { StackNavigator } from 'react-navigation';
import HomeView from './HomeView';
import MyInfoContainer from './MyInfoContainer';
import VersionView from './VersionView';

const more_navigation = StackNavigator({
    Home: {screen: HomeView},
    MyInfo: {screen: MyInfoContainer},
    // Version: {screen: VersionView}
},{
    headerMode: 'none',
    navigationOptions: ({ navigation }) => ({
        tabBarVisible: !navigation.state.params ? false : navigation.state.params.tabBarVisible
    }),
});

export default more_navigation;