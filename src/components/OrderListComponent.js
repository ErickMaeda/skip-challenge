import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity
} from 'react-native';
import {Card, CardItem, Body} from 'native-base';

class OrderListComponent extends React.Component {
  
    constructor(props) {
        super(props);

        console.log('olha a props', props);
        
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.data}
                    renderItem={({item}) => this.renderItem(item)}
                />
            </View>
        );
    }

    renderItem(item) {        
        return (
            <TouchableOpacity style={styles.containerItem}>
                <Card>
                    <CardItem>
                        <Body style={{flexDirection: 'row'}}>
                            <View style={styles.containerContent}>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{fontWeight: 'bold', fontSize: 11.5, color: '#333'}}>Order #{item.id}</Text>
                                </View>
                                <Text style={{fontSize: 11, color: '#333', marginVertical: 3}}>{item.dishes.length} Dishes</Text>
                                <Text style={{fontSize: 11, color: '#333', marginVertical: 3}}>U$ {item.value}</Text>
                            </View>
                        </Body>
                    </CardItem>
                </Card>
          </TouchableOpacity>
        );
    }
}

export default OrderListComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    containerItem: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 3,
        marginVertical: 1.5,
    },
    containerTitle: {
        flexDirection: 'row'
    },
    containerContent: {
        flexDirection: 'column'
    },
    imageStrech: {
        marginHorizontal: 15,
        alignSelf: 'center',
        width: 50,
        height: 50
    }
});