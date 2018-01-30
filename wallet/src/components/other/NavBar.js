/* @flow */
import React, { Component } from "react";
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";
import {
  View,
  Text,
  TouchableOpacity,
  DrawerLayoutAndroid,
  Modal,
  Button
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { showUserProfile } from "./../../actions";

type Props = {
  showUserProfile: () => void
};

type State = {
  modal: boolean
};

class NavBar extends Component<Props, State> {
  state = {
    modal: false
  };

  showUserProfile = () => {
    this.props.showUserProfile();
  };

  showModal = () => {
    this.setState({
      modal: !this.state.modal
    });
    // Add form crypto wallet
  };

  render() {
    const {
      containerStyle,
      balanceStyle,
      balanceText,
      balanceSumStyle,
      subText
    } = styles;
    return (
      <View style={containerStyle}>
        <View>
          <TouchableOpacity onPress={this.showUserProfile.bind(this)}>
            <Icon name="list" size={30} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={balanceStyle}>
          <Text style={balanceText}>{`Balance of the wallet`}</Text>
          <Text style={balanceSumStyle}>{`$12 256`}</Text>
        </View>

        <View>
          <TouchableOpacity onPress={this.showModal.bind(this)}>
            <Icon name="plus" size={25} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 80,
    backgroundColor: "#41b03c"
  },
  balanceStyle: {
    // alignItems: "stretch",
  },
  balanceText: {
    fontSize: 24,
  },  
  balanceSumStyle: {
    fontSize: 28,
    color: "#fff",
    textAlign: "center"
  },
  subText: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center"
  }
};

export default connect(null, { showUserProfile })(NavBar);
