import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = props => {
    const {
      thumbStyle,
      headerContentStyle,
      thumbnailContainerStyle,
      headerTextStyle,
      imageStyle,
    } = styles;
    const { record } = props;
    return (<Card>
        <CardSection>
            <View style={thumbnailContainerStyle}>
                <Image
                    style={thumbStyle}
                    source={{ uri: 'https://image.freepik.com/free-icon/no-translate-detected_318-40184.jpg' }}
                />
            </View>
            <View style={headerContentStyle}>
                <Text style={headerTextStyle}>{record.id}</Text>
                <Text>second text</Text>
            </View>
        </CardSection>

        <CardSection>
          <Image style={imageStyle} source={{ uri: 'https://i.kapital.kz/c/4f9af64c7b53479e46903b09e4a6bfa9/n/630/420/2/7/b/2/4/eebd4ea35347708661fc9e88382.jpg' }} />
        </CardSection>

        <CardSection>
          <Button text='Link FAQ' onPress={() => Linking.openURL('https://facebook.github.io/react-native/docs/linking.html')} />
        </CardSection>
    </Card>
  ); 
};
const styles = {
    headerContentStyle: {
      flexDirection: 'column',
      justifyContent: 'space-around'
    },
    headerTextStyle: {
      fontSize: 18,
    },
    thumbStyle: {
      height: 50,
      width: 50,
    },
    thumbnailContainerStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 10,
      marginLeft: 10
    },
    imageStyle: {
      height: 300,
      flex: 1,
      width: null,
    }
};
export default AlbumDetail;
