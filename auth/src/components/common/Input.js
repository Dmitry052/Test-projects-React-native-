import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    const { inputStyle, labelStyle, containerStyle  } = styles;
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                placeholder={placeholder}
                value={value}
                secureTextEntry={secureTextEntry}
                autocorrect={false}
                onChangeText={onChangeText}
                style={inputStyle}
                />
        </View>
    )
};
const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 24,
        lineHeight: 23,
        flex: 2
    },
    labelStyle: {
        fontSize: 24,

        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 60,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
}
export { Input };