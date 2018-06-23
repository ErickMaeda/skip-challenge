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

class SignInScreen extends React.Component {
  
    render() {
        return (
            <View style={styles.container}>
                <Text>Sign In Screen</Text>
                <StatusBar barStyle="default" />
            </View>
        );
    }
}

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});