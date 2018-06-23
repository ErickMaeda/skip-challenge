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

class HomeScreen extends React.Component {
  
    render() {
        return (
            <View style={styles.container}>
                <Text>Home Screen</Text>
                <StatusBar barStyle="default" />
            </View>
        );
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});