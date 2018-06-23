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
import RestaurantListComponent from '../components/RestaurantListComponent';
import {
    getRestaurantList,
    getOrderList
} from '../config/Api';

class RestaurantsScreen extends React.Component {
  
    constructor(props) {
        super(props);

        this.state = {
            restaurants: getRestaurantList()
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <RestaurantListComponent data={this.state.restaurants} onPress={(item) => this.onChooseRestaurant(item)}/>
            </View>
        );
    }

    onChooseRestaurant(item) {
        this.props.navigation.navigate('OrderFormScreen', item);
    }
}

export default RestaurantsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});