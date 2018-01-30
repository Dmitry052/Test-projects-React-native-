import React from 'react';
import { View } from 'react-native';

const CardSection = props => <View style={styles.containerStyle}>{props.children}</View>;

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    // верх - низ
    padding: 5,
    paddingLeft: 20,
    paddingRight: 20,
    // цвет секции
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    flexDirection: 'row',
    // цвет нижнего бордера
    borderColor: '#ddd',
    // position: 'relative',
    
    marginTop: 5
  }
};

export { CardSection };
  