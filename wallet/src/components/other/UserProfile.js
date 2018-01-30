/* @flow */
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  CameraRoll
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { setUserParams, signOutUser } from "./../../actions";

type Props = {
  setUserParams: ({
    field: string,
    text: string
  }) => void,
  signOutUser: () => void,
  user: {
    firstName: string,
    lastName: string,
    email: string,
    bankCard: string
  }
};

class UserProfile extends Component<Props> {
  setUserParams = text => {
    this.props.setUserParams(text);
  };

  setPhoto = () => {
    CameraRoll.getPhotos({
      first: 20,
      assetType: "All"
    })
      .then(r => {
        // use photo
      })
      .catch(err => {
        //Error Loading Images
      });
  };

  onClickSignOut = () => {
    this.props.signOutUser();
  };

  render() {
    const {
      avatarStyle,
      signoutStyle,
      inputTextStyle,
      signoutTextStyle
    } = styles;
    const { firstName, lastName, email, bankCard } = this.props.user;

    return (
      <View>
        <View style={avatarStyle}>
          <TouchableOpacity onPress={this.setPhoto.bind(this)}>
            <Icon name="user-plus" size={50} color="steelblue" />
          </TouchableOpacity>
        </View>
        <View>
          <Text>First name</Text>
          <TextInput
            value={firstName}
            style={inputTextStyle}
            onChangeText={text =>
              this.setUserParams({ field: "firstName", text })
            }
          />
          <Text>Last name</Text>
          <TextInput
            value={lastName}
            style={inputTextStyle}
            onChangeText={text =>
              this.setUserParams({ field: "lastName", text })
            }
          />
          <Text>Email</Text>
          <TextInput
            value={email}
            style={inputTextStyle}
            onChangeText={text => this.setUserParams({ field: "email", text })}
          />
          <Text>Bank card</Text>
          <TextInput
            value={bankCard}
            style={inputTextStyle}
            onChangeText={text =>
              this.setUserParams({ field: "bankCard", text })
            }
          />
        </View>
        <View style={signoutStyle}>
          <Text style={signoutTextStyle}>Sign out</Text>
          <TouchableOpacity onPress={this.onClickSignOut.bind(this)}>
            <Icon name="sign-out" size={30} color="steelblue" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = {
  avatarStyle: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  signoutStyle: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center"
  },
  signoutTextStyle: {
    paddingRight: 10
  },
  inputTextStyle: {
    fontSize: 20,
    marginLeft: 5,
    marginRight: 10
  }
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, { setUserParams, signOutUser })(
  UserProfile
);
