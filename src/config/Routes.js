import { 
    StackNavigator, 
    SwitchNavigator 
} from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import TodoAddScreen from '../screens/TodoAddScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';

const AppStack = StackNavigator({ 
    Home: HomeScreen,
    TodoAdd: TodoAddScreen
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