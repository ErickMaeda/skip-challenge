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

class RestaurantRoleScreen extends React.Component {
  
    render() {
        return (
            <View style={styles.container}>
                <Text>RestaurantRoleScreen</Text>
                <StatusBar barStyle="default" />
            </View>
        );
    }
}

export default RestaurantRoleScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});