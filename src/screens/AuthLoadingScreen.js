import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

class AuthLoadingScreen extends React.Component {
    
    componentDidMount() {
        this._bootstrapAsync();
    }
  
    _bootstrapAsync = async () => {
      const userToken = await AsyncStorage.getItem('userToken');
  
      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    };
  
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}

export default AuthLoadingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});