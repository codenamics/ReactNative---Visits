import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  FlatList,
  View,
  ScrollView,
  Dimensions,
  ImageBackground
} from "react-native";

const { width, height } = Dimensions.get("screen");

const mocks = [
  {
    id: 1,
    title: "Visit 1",
    date: "28-02-2019",
    url:
      "https://images.pexels.com/photos/1001752/pexels-photo-1001752.jpeg?cs=srgb&dl=checking-checklist-daily-report-1001752.jpg&fm=jpg"
  },
  {
    id: 2,

    title: "Visit 2",
    date: "01-03-2019",
    url:
      "https://images.pexels.com/photos/1001752/pexels-photo-1001752.jpeg?cs=srgb&dl=checking-checklist-daily-report-1001752.jpg&fm=jpg"
  },
  {
    id: 3,
    title: "Visit 3",
    date: "03-03-2019",
    url:
      "https://images.pexels.com/photos/1001752/pexels-photo-1001752.jpeg?cs=srgb&dl=checking-checklist-daily-report-1001752.jpg&fm=jpg"
  }
];

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
    paddingHorizontal: 36,
    marginHorizontal: 36,
    backgroundColor: "#55a8fd",
    position: "relative"
  },
  visitDate: {
    paddingHorizontal: 36,
    position: "absolute",
    bottom: -20,
    right: 60,
    left: 60,
    padding: 12,
    borderRadius: 12,
    backgroundColor: "white"
  },

  shadow2: {
    shadowColor: "#000",
    shadowOffset: {
      width: 4,
      height: 6
    },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,

    elevation: 16
  }
});
class Main extends Component {
  static navigationOptions = {
    header: (
      <View style={[styles.flex, styles.row, styles.header]}>
        <View>
          <Text>Search for</Text>
          <Text>Your visits</Text>
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
        <FlatList
          horizontal
          pagingEnabled
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          style={[{ overflow: "visible" }, styles.shadow2]}
          snapToAlignment="center"
          data={this.props.visits}
          keyExtractor={(item, index) => `${item.id}`}
          renderItem={({ item }) => this.renderVisit(item)}
        />
      </View>
    );
  };

  renderVisit = item => {
    return (
      <View style={{ position: "relative" }}>
        <View
          style={[
            styles.flex,
            styles.row,
            styles.visit,
            { alignItems: "center", justifyContent: "center" }
          ]}
        >
          <Text style={{ fontSize: 40 }}>{item.title}</Text>
        </View>
        <View style={[styles.visitDate, { alignItems: "center" }]}>
          <Text style={{ fontSize: 25 }}>{item.date}</Text>
        </View>
      </View>
    );
  };
  renderDrugs = () => {
    return (
      <View style={[styles.flex, styles.column]}>
        <Text />
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

Main.defaultProps = {
  visits: mocks
};

export default Main;
