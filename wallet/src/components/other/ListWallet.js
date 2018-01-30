import React, { Component } from "react";
import {
  View,
  Text,
  UIManager,
  LayoutAnimation,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";
import { Card, CardSection } from "./../common";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

type Props = {
  main: Array<mixed>
};

class MainForm extends Component<Props> {
  ponentWillUpdate = () => {
    UIManager.setLayoutAnimationEnableExperimental &&
      UIManager.setLayoutAnimationEnableExperimental(true);
    LayoutAnimation.spring();
  };

  onClickCurrentWallet = item => {
    // render edit modal
  };

  render() {
    const {
      containerCardSelection,
      styleCardSectionName,
      styleCardSectionValue,
      styleCardSectionPlus,
      styleCardSectionMinus
    } = styles;

    const render = this.props.main.map((item, i) => {
      let styleRate;
      let difference;

      const lastRate = item.history[0].rate;
      const nowRate = item.rate;

      if (lastRate > nowRate) {
        const diff = Math.floor(lastRate - nowRate);
        const percent = diff * 100 / lastRate;

        styleRate = styleCardSectionPlus;
        difference = `+$${diff} (${percent.toFixed(2)})% `;
      } else if (lastRate < nowRate) {
        const diff = Math.floor(nowRate - lastRate);
        const percent = diff * 100 / lastRate;

        styleRate = styleCardSectionMinus;
        difference = `+$${diff} (${percent.toFixed(2)})% `;
      } else {
        styleRate = styleCardSectionValue;
        difference = `+/- $0`;
      }
      return (
        <TouchableOpacity
          key={i}
          onPress={this.onClickCurrentWallet.bind(this, item)}
        >
          <CardSection>
            <View>
              <Text style={styleCardSectionName}>{item.name}</Text>
              <Text style={styleCardSectionName}>{item.attr}</Text>
            </View>
            <View>
              <Text style={styleCardSectionValue}>{`$${item.rate}`}</Text>
              <Text style={styleRate}>{difference}</Text>
            </View>
          </CardSection>
        </TouchableOpacity>
      );
    });

    return <Card>{render}</Card>;
  }
}

const styles = {
  containerCardSelection: {},

  styleCardSectionName: {
    fontSize: 20
  },

  styleCardSectionValue: {
    fontSize: 20,
    color: "black"
  },

  styleCardSectionPlus: {
    color: "green"
  },

  styleCardSectionMinus: {
    color: "red"
  }
};

const mapStateToProps = state => {
  return {
    main: state.main.currencies
  };
};

export default connect(mapStateToProps, {})(MainForm);
