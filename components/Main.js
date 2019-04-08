import React, { Component } from "react";
import { Text, StyleSheet, View, ScrollView, Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

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
    paddingBottom: 24
  },
  // visits: {
  //   paddingHorizontal: 36
  // },
  visit: {
    width: width - 36 * 2,
    borderRadius: 12,
    padding: 36,
    marginHorizontal: 36,
    backgroundColor: "pink"
  }
});
export default class Main extends Component {
  static navigationOptions = {
    header: (
      <View style={[styles.flex, styles.row, styles.header]}>
        <View>
          <Text>Search for</Text>
          <Text>Destination</Text>
        </View>
        <View>
          <Text>Avatar</Text>
        </View>
      </View>
    )
  };

  renderVisits = () => {
    return (
      <View style={[styles.flex, styles.column]}>
        <ScrollView
          horizontal
          pagingEnabled
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          snapToAlignment="center"
        >
          <View style={[styles.flex, styles.visit]}>
            <Text>Visits 1</Text>
          </View>
          <View style={[styles.flex, styles.visit]}>
            <Text>Visits 2</Text>
          </View>
          <View style={[styles.flex, styles.visit]}>
            <Text>Visits 3</Text>
          </View>
        </ScrollView>
      </View>
    );
  };

  renderDrugs = () => {
    return (
      <View style={[styles.flex, styles.column]}>
        <Text>Drugs</Text>
      </View>
    );
  };

  render() {
    return (
      <View style={[styles.flex, styles.visits]}>
        {this.renderVisits()}
        {this.renderDrugs()}
      </View>
    );
  }
}
