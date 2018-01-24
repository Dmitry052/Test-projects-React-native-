import React from 'react';
import { View } from 'react-native';
import { PickerTest } from './Component';


const App = () => {
    const { container } = styles;
    return (
        <View style={container}>
            <PickerTest />
        </View>
    )
}

const styles = {
    container: {
        flex: 1
    }
}

export default App;