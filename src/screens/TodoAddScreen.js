import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
  Text
} from 'react-native';
import SignUpScreen from './SignUpScreen';

class TodoAddScreen extends React.Component {
  
    render() {
        return (
            <View style={styles.container}>
                <Text>Todo Add Screen</Text>
                <StatusBar barStyle="default" />
            </View>
        );
    }
}

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});