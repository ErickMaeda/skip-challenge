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

class CostumerRoleScreen extends React.Component {
  
    constructor(props) {
        super(props);

        console.log('props', props);
        
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>CostumerRoleScreen</Text>
                <StatusBar barStyle="default" />
            </View>
        );
    }
}

export default CostumerRoleScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});