/* @flow */
import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Actions } from "react-native-router-flux";

type Props = {};

type State = {
  activeAction: string
};

class TabBar extends Component<Props, State> {
  state = {
    activeAction: "home"
  };
  onClickIcon = (route: string) => {
    this.setState({
      activeAction: route
    });
    switch (route) {
      case "home":
        return Actions.mainForm();
      case "paper-plane":
        return Actions.notifications();
      case "history":
        return Actions.history();
      case "line-chart":
        return Actions.rates();
      default:
        return Actions.mainForm();
    }
  };

  render() {
    const { containerStyle, iconStyle } = styles;
    const activeStyle = { backgroundColor: "steelblue", color: "#fff" };
    const iconName = ["home", "paper-plane", "history", "line-chart"];
    return (
      <View style={containerStyle}>
        {iconName.map((item, i) => {
          const active = this.state.activeAction === item ? activeStyle : "";
          return (
            <TouchableOpacity
              key={i}
              onPress={this.onClickIcon.bind(this, item)}
            >
              <Icon
                style={[iconStyle, active]}
                name={item}
                size={25}
                color="#fff"
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  iconStyle: {
    color: "#000",
    padding: 5,
    borderWidth: 1,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: "#fff",
    borderColor: "#ddd"
  }
};

export default TabBar;
