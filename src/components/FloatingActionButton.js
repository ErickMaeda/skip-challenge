import React from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

class FloatingActionButton extends React.Component {
  
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity
                style={styles.container}
                onPress={() => this.props.onPress()}
            >
                {this.props.icon}
            </TouchableOpacity>
        );
    }
}

export default FloatingActionButton;

const styles = StyleSheet.create({
    container: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#111',
        position: 'absolute',
        bottom: 10,
        right: 10,
        zIndex: 9999
    }
});