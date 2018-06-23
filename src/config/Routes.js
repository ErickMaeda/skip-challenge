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
import OrdersScreen from '../screens/OrdersScreen';
import React, { Component } from 'react';
import { 
    StyleSheet,
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
            title: 'Orders'
        })
    },
    OrdersScreen: {
        title: 'Orders',
        screen: OrdersScreen
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