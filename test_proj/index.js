// import { AppRegistry } from 'react-native';
// import App from './App';

// AppRegistry.registerComponent('test_proj', () => App);
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

const App = () => (
    <View style={{ flex: 1 }}>
      <Header headerText={'Back Office'} />
      <AlbumList />
    </View>
  );

AppRegistry.registerComponent('test_proj', () => App);
