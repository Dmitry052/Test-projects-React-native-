import React, { Component } from 'react';
import { View, Text, DrawerLayoutAndroid, TouchableHighlight } from 'react-native';

class LeftMenu extends Component {
    constructor() {
        super();
        this.openDrawer = this.openDrawer.bind(this);
    }

    openDrawer() {
        this.drawer.openDrawer();
    }

    render() {
        const navigationView = (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
            </View>
        );
        return (
            <DrawerLayoutAndroid
                drawerWidth={200}
                ref={(_drawer) => this.drawer = _drawer}
                // drawerPosition={DrawerLayoutAndroid.positions.right} не работает
                renderNavigationView={() => navigationView}>
                <View style={{flex: 1, alignItems: 'center'}}>
                    <TouchableHighlight onPress={this.openDrawer}>
                        <Text>{'Open Drawer'}</Text>
                    </TouchableHighlight>
                </View>
            </DrawerLayoutAndroid>
        )
    }
}

export { LeftMenu };
