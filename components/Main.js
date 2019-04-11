import React, { Component } from "react";
import FontAwesome, { Icons } from "react-native-fontawesome";
import {
  Text,
  StyleSheet,
  FlatList,
  View,
  ScrollView,
  Dimensions,
  ImageBackground,
  Button
} from "react-native";

import LinearGradient from "react-native-linear-gradient";

const { width, height } = Dimensions.get("screen");

const mocks = [
  {
    id: 1,
    title: "Visit 1",
    date: "28-02-2019",
    completed: true,
    url:
      "https://images.pexels.com/photos/1001752/pexels-photo-1001752.jpeg?cs=srgb&dl=checking-checklist-daily-report-1001752.jpg&fm=jpg"
  },
  {
    id: 2,

    title: "Visit 2",
    date: "01-03-2019",
    completed: true,
    url:
      "https://images.pexels.com/photos/1001752/pexels-photo-1001752.jpeg?cs=srgb&dl=checking-checklist-daily-report-1001752.jpg&fm=jpg"
  },
  {
    id: 3,
    title: "Visit 3",
    date: "03-03-2019",
    completed: true,
    url:
      "https://images.pexels.com/photos/1001752/pexels-photo-1001752.jpeg?cs=srgb&dl=checking-checklist-daily-report-1001752.jpg&fm=jpg"
  },
  {
    id: 4,
    title: "Visit 3",
    date: "03-03-2019",
    upcom: true,
    url:
      "https://images.pexels.com/photos/1001752/pexels-photo-1001752.jpeg?cs=srgb&dl=checking-checklist-daily-report-1001752.jpg&fm=jpg"
  },
  {
    id: 5,
    title: "Visit 3",
    date: "03-03-2019",
    url:
      "https://images.pexels.com/photos/1001752/pexels-photo-1001752.jpeg?cs=srgb&dl=checking-checklist-daily-report-1001752.jpg&fm=jpg"
  },
  {
    id: 6,
    title: "Visit 3",
    date: "03-03-2019",
    url:
      "https://images.pexels.com/photos/1001752/pexels-photo-1001752.jpeg?cs=srgb&dl=checking-checklist-daily-report-1001752.jpg&fm=jpg"
  },
  {
    id: 7,
    title: "Visit 3",
    date: "03-03-2019",
    url:
      "https://images.pexels.com/photos/1001752/pexels-photo-1001752.jpeg?cs=srgb&dl=checking-checklist-daily-report-1001752.jpg&fm=jpg"
  },
  {
    id: 8,
    title: "Visit 3",
    date: "03-03-2019",
    url:
      "https://images.pexels.com/photos/1001752/pexels-photo-1001752.jpeg?cs=srgb&dl=checking-checklist-daily-report-1001752.jpg&fm=jpg"
  },
  {
    id: 9,
    title: "Visit 3",
    date: "03-03-2019",
    url:
      "https://images.pexels.com/photos/1001752/pexels-photo-1001752.jpeg?cs=srgb&dl=checking-checklist-daily-report-1001752.jpg&fm=jpg"
  },
  {
    id: 10,
    title: "Visit 3",
    date: "03-03-2019",
    url:
      "https://images.pexels.com/photos/1001752/pexels-photo-1001752.jpeg?cs=srgb&dl=checking-checklist-daily-report-1001752.jpg&fm=jpg"
  },
  {
    id: 11,
    title: "Visit 3",
    date: "03-03-2019",
    url:
      "https://images.pexels.com/photos/1001752/pexels-photo-1001752.jpeg?cs=srgb&dl=checking-checklist-daily-report-1001752.jpg&fm=jpg"
  },
  {
    id: 12,
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
    shadowRadius: 11,

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

  renderVisits = () => {
    return (
      <View style={[styles.flex, styles.column]}>
        <FlatList
          scrollEnabled
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          style={[{ overflow: "visible" }, styles.shadow2]}
          data={this.props.visits}
          keyExtractor={(item, index) => `${item.id}`}
          renderItem={({ item }) => this.renderVisit(item)}
        />
      </View>
    );
  };

  renderVisit = item => {
    let color;
    if (item.completed) {
      color = ["#1aff51", "#35ff4a", "#00ff3d"];
    } else {
      color = ["#FFf", "#fff", "#fff"];
    }
    if (item.upcom) {
      color = ["#e2ed0b", "#dbf115", "#f7ff00"];
    }
    return (
      <View style={{ position: "relative" }}>
        <LinearGradient
          colors={color}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[
            styles.flex,
            styles.row,
            styles.visit,
            { justifyContent: "space-between", alignItems: "center" }
          ]}
        >
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>{item.title}</Text>
          <Text>{item.date}</Text>
        </LinearGradient>
      </View>
    );
  };
  renderDrugs = () => {
    return (
      <View style={[styles.flex, styles.column]}>
        <Text>sss</Text>
      </View>
    );
  };

  render() {
    return (
      <View style={[styles.flex, styles.visits]}>{this.renderVisits()}</View>
    );
  }
}

Main.defaultProps = {
  visits: mocks
};

export default Main;
