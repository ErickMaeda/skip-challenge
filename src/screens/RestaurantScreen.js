import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
  TextInput,
  Button,
  Text
} from 'react-native';

class RestaurantScreen extends React.Component {
  
    constructor(props) {
        super(props);

        this.state = {
            email: 'costumer@plusfood.com',
            password: '123',
            idType: 1
        };
    }

    render() {
        return (
            <View />
        );
    }

}

export default RestaurantScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});