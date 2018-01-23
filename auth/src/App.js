import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import {Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state= { loggedIn: null }

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyCWU2Ss3eZEHHp_vtP4-AAZ0JquHONRzPI",
            authDomain: "authentication052.firebaseapp.com",
            databaseURL: "https://authentication052.firebaseio.com",
            projectId: "authentication052",
            storageBucket: "authentication052.appspot.com",
            messagingSenderId: "239462978674"
        });

        firebase.auth().onAuthStateChanged((user) =>{
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }
    renderContent = () => {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Button
                        onPress={() => firebase.auth().signOut()}
                        text='Log Out'
                    />
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size='large' />;
        }
    }

    render() {
        return (
            <View style={{ height: 100 }}>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        )
    }
}

export default App;