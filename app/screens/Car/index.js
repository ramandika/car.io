import { StackNavigator } from 'react-navigation';
import MyCars from './CarContainer';
import CarDiagnostic from './DiagnosticContainer';

const contact_navigation = StackNavigator({
    MyCars: {screen: MyCars},
    CarDiagnostic: {screen: CarDiagnostic}
},{
    headerMode: 'none',
    navigationOptions: ({ navigation }) => ({
        tabBarVisible: !navigation.state.params ? false : navigation.state.params.tabBarVisible
    }),
});

export default contact_navigation;