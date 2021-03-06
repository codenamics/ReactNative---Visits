import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Icon } from "react-native-elements";
import LinearGradient from "react-native-linear-gradient";

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
    paddingHorizontal: 30,

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

const Visit = ({ item }) => {
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

        <Text style={{ fontSize: 18 }}>{item.date}</Text>

        <Icon
          raised
          reverse
          name="check"
          type="font-awesome"
          color="#21ea07"
          onPress={() => console.log("hello")}
        />
      </LinearGradient>
    </View>
  );
};

export default Visit;
