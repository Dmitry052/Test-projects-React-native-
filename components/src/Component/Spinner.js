import React from 'react';
import { View, ActivityIndicator } from 'react-native';


const Spinner = () => {
    return (
        <View>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    )
}

export { Spinner };
