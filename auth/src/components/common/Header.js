import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = style;
  
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};
const style = {
  viewStyle: {
    backgroundColor: '#e7e7e7',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
  },
  textStyle: {
    fontSize: 20
  }
};

export { Header };
