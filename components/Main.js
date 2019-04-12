import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

import Visits from "./Visits";

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  column: {
    flexDirection: "column"
  },
  row: {
    flexDirection: "row"
  },
  header: {
    backgroundColor: "white",
    paddingHorizontal: 36,
    paddingTop: 40,
    paddingBottom: 2
  },
  // visits: {
  //   paddingHorizontal: 36
  // },
  visit: {
    borderRadius: 12,
    paddingHorizontal: 30,
    marginHorizontal: 10,
    marginTop: 20,
    backgroundColor: "white",
    height: 90
  },

  shadow2: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,

    elevation: 14
  }
});
class Main extends Component {
  static navigationOptions = {
    header: (
      <View style={[styles.flex, styles.row, styles.header]}>
        <View>
          <Text>Hello, Damian</Text>
          <Text style={{ fontSize: 35, fontWeight: "bold" }}>Your visits </Text>
        </View>
        <View />
      </View>
    )
  };

  render() {
    return (
      <View style={[styles.flex, styles.visits]}>
        <Visits />
      </View>
    );
  }
}

export default Main;
