import { 
    StackNavigator, 
    SwitchNavigator ,
    createBottomTabNavigator
} from 'react-navigation';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import CostumerRoleScreen from '../screens/CostumerRoleScreen';
import RestaurantRoleScreen from '../screens/RestaurantRoleScreen';
import CourierRoleScreen from '../screens/CourierRoleScreen';
import React, { Component } from 'react';
import { 
    View,
    TouchableOpacity,
    Text 
} from 'react-native';

console.disableYellowBox = true;

const CourierRoleStack = StackNavigator({ 
    CourierRoleScreen: {
        screen: CourierRoleScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Courier',
        })
    }
});

const CostumerRoleStack = StackNavigator({
    CostumerRoleScreen: {
        screen: CostumerRoleScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Restaurants',
            headerRight: (
                <TouchableOpacity style={{alignSelf: 'center', alignItems: 'center', marginHorizontal: 10, flex: 1}}>
                    <Text style={{fontSize: 12, color: '#111'}}>ORDERS</Text>
                </TouchableOpacity>
            )
        })
    }
});

const RestaurantRoleStack = StackNavigator({
    RestaurantRoleScreen: {
        screen: RestaurantRoleScreen,
        avigationOptions: ({ navigation }) => ({
            title: 'Restaurant'
        })
    }
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
        RestaurantRoleScreen: RestaurantRoleStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
);