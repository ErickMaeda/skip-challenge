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
import OrderListComponent from '../components/OrderListComponent';
import FloatingActionButton from '../components/FloatingActionButton';
import {
    getRestaurantList,
    getOrderList
} from '../config/Api';

class CostumerRoleScreen extends React.Component {
  
    constructor(props) {
        super(props);

        this.state = {
            restaurants: getRestaurantList(),
            orders: getOrderList(),
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <FloatingActionButton onPress={() => console.log('test')}/>
                <OrderListComponent data={this.state.orders}/>
            </View>
        );
    }
}

export default CostumerRoleScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});