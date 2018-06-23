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
import Icon from 'react-native-vector-icons/MaterialIcons';

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
                <FloatingActionButton icon={this.getPlusIcon()} onPress={() => console.log('test')}/>
                <OrderListComponent data={this.state.orders}/>
            </View>
        );
    }

    getPlusIcon() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Icon 
                    name="add" 
                    size={30} 
                    color={'white'} 
                    style={{
                        alignSelf: 'center'
                    }}
                />
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