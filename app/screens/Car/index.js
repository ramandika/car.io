import { StackNavigator } from 'react-navigation';
import MyCars from './CarContainer';
import CarDiagnostic from './DiagnosticContainer';
import CreateCarContainer from './CreateCarContainer';
import ScanQRContainer from './ScanQRContainer';

const car_navigation = StackNavigator({
    MyCars: {screen: MyCars},
    CarDiagnostic: {screen: CarDiagnostic},
    CreateCar: {screen: CreateCarContainer},
    ScanQR: {screen: ScanQRContainer}
},{
    headerMode: 'none',
    navigationOptions: ({ navigation }) => ({
        tabBarVisible: navigation.state.params ? !!navigation.state.params.tabBarVisible : false
    }),
});

export default car_navigation;