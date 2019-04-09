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
import LinearGradient from "react-native-linear-gradient";

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
    paddingBottom: 2
  },
  // visits: {
  //   paddingHorizontal: 36
  // },
  visit: {
    width: width - 36 * 2,
    borderRadius: 12,
    paddingHorizontal: 36,
    marginHorizontal: 36,
    marginTop: 25,
    backgroundColor: "white",
    position: "relative"
  },
  visitDate: {
    paddingHorizontal: 36,
    position: "absolute",
    bottom: 20,
    right: 60,
    left: 60,
    padding: 12,
    borderRadius: 12,
    backgroundColor: "white"
  },

  shadow2: {
    shadowColor: "#00d4ff",
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.7,
    shadowRadius: 13,

    elevation: 0
  }
});
class Main extends Component {
  static navigationOptions = {
    header: (
      <View style={[styles.flex, styles.row, styles.header]}>
        <View>
          <Text>Hello, Damian</Text>
          <Text style={{ fontSize: 35, fontWeight: "bold" }}>Your visits</Text>
        </View>
        <View />
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
        <LinearGradient
          colors={["#18d7ff", "#54e3ff", "#00d4ff"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[
            styles.flex,
            styles.row,
            styles.visit,
            { alignItems: "center", justifyContent: "center" }
          ]}
        >
          <Text style={{ fontSize: 55, fontWeight: "bold" }}>{item.title}</Text>
        </LinearGradient>
        <View style={[styles.visitDate, { alignItems: "center" }]}>
          <Text style={{ fontSize: 25 }}>{item.date}</Text>
        </View>
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
