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

const CourierRoleStack = StackNavigator({ 
    CourierRoleScreen: CourierRoleScreen
});

const CostumerRoleStack = StackNavigator({ 
    CostumerRoleScreen: CostumerRoleScreen
});

const RestaurantRoleStack = StackNavigator({
    CostumerRoleScreen: CostumerRoleScreen
})

const AuthStack = StackNavigator({ 
    SignIn: SignInScreen,
    SignUp: SignUpScreen
});

export default SwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        CourierRoleScreen: CourierRoleStack,
        CostumerRoleScreen: CostumerRoleStack,
        RestaurantRoleStack: RestaurantRoleStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
);