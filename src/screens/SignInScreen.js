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
import {
    signIn
} from '../actions/SignAction';
import User from '../entities/User';

class SignInScreen extends React.Component {
  
    constructor(props) {
        super(props);

        this.state = {
            email: 'costumer@plusfood.com',
            password: '123',
            idType: 1
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{flex: 1}}>
                    <Text style={{fontSize: 20, alignSelf: 'center'}}>Welcome</Text>
                </View>
                <View style={{flex: 2}}>
                    <TextInput
                        value={this.state.email}
                        onChangeText={(email) => this.setState({email})}
                        keyboardType="email-address"
                        style={{marginVertical: 8}}
                        placeholder = "Email"
                    />
                    <TextInput
                        value={this.state.password}
                        style={{marginVertical: 8}}
                        placeholder = "Password"

                    />
                    <Button
                        onPress={() => this.doSignInAction()}
                        title="Sign In"
                        color="#FF0000"
                        accessibilityLabel="Sign In Button"
                    />
                </View>
            </View>
        );
    }

    doSignInAction() {
        let user = new User();
        user.setEmail(this.state.email);
        user.setPassword(this.state.password);
        user.setIdType(this.state.idType);
        
        let request = signIn(user);
                
        if (request.status) {
            this.props.navigation.navigate(request.route, user);
        } else {
            alert("Oops, it's not a valid email or password, can you try again?");
        }
    }
}



export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    containerInputs: {
        flex: 2,
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'column'
    }
});