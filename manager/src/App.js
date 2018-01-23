import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from "./reducers";
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyDYkJ9titon0uVYdaa_U_xqb7zMXu9X9VQ",
      authDomain: "manager-052.firebaseapp.com",
      databaseURL: "https://manager-052.firebaseio.com",
      projectId: "manager-052",
      storageBucket: "manager-052.appspot.com",
      messagingSenderId: "362302505570"
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
export default App;
