import React from "react";
import { View, Text, TextInput, Dimensions } from "react-native";
import { Header } from "react-native-elements";

const SCREEN_WIDTH = Dimensions.get("window").width;

const Input = ({ label, value, onChangeText, secureTextEntry }) => {
  const { labelStyle, inputStyle, container } = styles;
  return (
    <View style={container}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        style={inputStyle}
      />
    </View>
  );
};

const styles = {
  container: {
    marginLeft: 20
  },
  labelStyle: {
    fontSize: 20,
    color: "#fff"
  },
  inputStyle: {
    fontSize: 20,
    color: "#000",
    backgroundColor: "skyblue",
    borderRadius: 15,
    paddingLeft: 15,
    width: SCREEN_WIDTH - 40
  }
};

export { Input };
