import React from "react";
import { 
    View,
    Text,
    Image,
    TouchableOpacity
} from "react-native";

const Button = ({ text, signUri, onPress }) => {
  const { buttonStyle, textStyle  } = styles;
  return (
    <View>
      <TouchableOpacity
         style={buttonStyle}
         onPress={onPress}
       >
         <Text style={textStyle}>{text}</Text>
       </TouchableOpacity>
    </View>
  );
};

const styles = {
    buttonStyle: {
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        borderRadius: 15,
        marginTop: 15,
        marginLeft: 20,
        marginRight: 20,
    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 20,
        fontWeight: '600',
        paddingTop: 15,
        paddingBottom: 15,
    },
};

export { Button };
