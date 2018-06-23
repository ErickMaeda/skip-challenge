import { 
    StackNavigator, 
    SwitchNavigator 
} from 'react-navigation';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import CostumerRoleScreen from '../screens/CostumerRoleScreen';
import RestaurantRoleScreen from '../screens/RestaurantRoleScreen';
import CourierRoleScreen from '../screens/CourierRoleScreen';

const AppStack = StackNavigator({ 
    CourierRoleScreen: CourierRoleScreen,
    CostumerRoleScreen: CostumerRoleScreen,
    RestaurantRoleScreen: RestaurantRoleScreen
});

const AuthStack = StackNavigator({ 
    SignIn: SignInScreen,
    SignUp: SignUpScreen
});

export default SwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
);