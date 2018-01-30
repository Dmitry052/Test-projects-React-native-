/* @flow */
import React, { Component } from "react";
import { View, Text, Dimensions, ScrollView } from "react-native";
import { connect } from "react-redux";
import { Card, CardSection } from "./../common";
import ListWallet from "./../other/ListWallet";
import UserProfile from "./../other/UserProfile";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

type Props = {
  user: {
    show: boolean
  }
};

class MainForm extends Component<Props> {
  renderBody = show => {
    if (!show) {
      return (
        <ScrollView>
          <ListWallet />
        </ScrollView>
      );
    } else {
      return (
        <View>
          <View style={styles.mainForm}>
            <ListWallet />
          </View>
          <View style={styles.userMenuStyle}>
            <UserProfile />
          </View>
        </View>
      );
    }
  };
  render() {
    const { show } = this.props.user;
    return <Card>{this.renderBody(show)}</Card>;
  }
}
const styles = {
  mainForm: {
    opacity: 0.1
  },
  userMenuStyle: {
    position: "absolute",
    zIndex: 10,
    backgroundColor: "#fff",
    width: 300,
    height: SCREEN_HEIGHT
  }
};

const mapStateToProps = state => {
  return {
    main: state.main.currencies,
    user: state.user
  };
};

export default connect(mapStateToProps, {})(MainForm);
