import React from 'react';
import { View, Picker } from 'react-native';


class PickerTest extends React.Component {
    constructor() {
        super();
        this.state = {
            language: 'java'
        }
    }
    render() {
        return (
            <View>
                <Picker
                    selectedValue={this.state.language}
                    onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
            </View>
        )
    }
}

export { PickerTest };
