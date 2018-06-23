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

class SignUpScreen extends React.Component {
  
    render() {
        return (
            <View style={styles.container}>
                <Text>Sign Up Screen</Text>
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