/**
 * This file is the high level of the Navigation Component.
 * 
 * Like we used react-navigation as the solution of navigator. 
 * We need to follow all the best practices as show in the documentation
 * 
 * https://reactnavigation.org/
 */

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
import OrderFormScreen from '../screens/OrderFormScreen';
import RestaurantsScreen from '../screens/RestaurantsScreen';
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
        screen: OrdersScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Orders'
        })
    },
    RestaurantsScreen: {
        screen: RestaurantsScreen,
        navigationOptions: ({ navigationOptions }) => {
            title: 'Restaurants'
        }
    },
    OrderFormScreen: {
        screen: OrderFormScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'New Order'
        })
    }
});

const RestaurantRoleStack = StackNavigator({
    RestaurantRoleScreen: {
        screen: RestaurantRoleScreen,
        navigationOptions: ({ navigation }) => ({
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