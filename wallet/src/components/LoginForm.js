/* @flow */
import React, { Component } from "react";
import { View, Image, Dimensions, Text } from "react-native";
import { connect } from "react-redux";
import { Input, Button } from "./common";
import { setParam, authUser } from "./../actions";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

type Props = {
  setParam: ({
    field: string,
    val: string
  }) => void,
  authUser: ({
    email: string,
    password: string
  }) => void,
  auth: {
    email: string, 
    password: string
  }
}

class LoginForm extends Component<Props> {

  onEmailChange = val => {
    this.props.setParam({ field: "email", val });
  };

  onPasswordChange = val => {
    this.props.setParam({ field: "password", val });
  };

  handleAuth = () => {
    const { email, password } = this.props.auth;
    
    this.props.authUser({ email, password });
  }

  render() {
    const {
      imgStyle,
      labelStyle,
      formStyle,
      container,
      textLabelStyle } = styles;

    const { email, password } = this.props.auth;
    return (
      <View style={container}>
        <Image style={imgStyle} source={require("./../img/4.png")} />
        <View style={labelStyle}>
          <Image
            style={{ width: 100, height: 100 }}
            source={require("./../img/7.png")}
          />
          <Text style={textLabelStyle} />
        </View>

        <View style={formStyle}>
          <Input
            label="Login"
            value={email}
            onChangeText={this.onEmailChange.bind(this)}
          />
          <Input
            label="Password"
            value={password}
            onChangeText={this.onPasswordChange.bind(this)}
            secureTextEntry
          />

          <Button text="Sign in" onPress={this.handleAuth.bind(this)} />
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    backgroundColor: "steelblue"
  },
  labelStyle: {
    justifyContent: "center",
    flexDirection: "row"
  },
  textLabelStyle: {
    fontSize: 25,
    color: "#fff",
    paddingTop: 15
  },
  imgStyle: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    position: "absolute",
    opacity: 0.2
  },
  formStyle: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT
  }
};

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps, { setParam, authUser })(LoginForm);
