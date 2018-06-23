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
import RestaurantListComponent from '../components/RestaurantListComponent';

class CostumerRoleScreen extends React.Component {
  
    constructor(props) {
        super(props);

        this.state = {
            restaurantList: [
                {
                    id: 1,
                    name: 'Restaurant 1',
                    description: 'Description 1',
                    address: 'Address 1',
                    image: 'https://www.designhill.com/uploads/cache/uploads/pagefile/1496308857-463804936592fdc79049fb7-77232378-500x500.png'
                },
                {
                    id: 2,
                    name: 'Restaurant 2',
                    description: 'Description 2',
                    address: 'Address 2',
                    image: 'https://www.designhill.com/uploads/cache/uploads/pagefile/1496308857-463804936592fdc79049fb7-77232378-500x500.png'
                },
                {
                    id: 3,
                    name: 'Restaurant 3',
                    description: 'Description 3',
                    address: 'Address 3',
                    image: 'https://www.designhill.com/uploads/cache/uploads/pagefile/1496308857-463804936592fdc79049fb7-77232378-500x500.png'
                },
                {
                    id: 4,
                    name: 'Restaurant 4',
                    description: 'Description 4',
                    address: 'Address 4',
                    image: 'https://www.designhill.com/uploads/cache/uploads/pagefile/1496308857-463804936592fdc79049fb7-77232378-500x500.png'
                }
            ]
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <RestaurantListComponent data={this.state.restaurantList}/>
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