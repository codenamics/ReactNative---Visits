import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Visit from "./Visit";

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

const Visits = () => {
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
  return (
    <View style={[styles.flex, styles.column]}>
      <FlatList
        scrollEnabled
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        style={[{ overflow: "visible" }, styles.shadow2]}
        data={mocks}
        keyExtractor={(item, index) => `${item.id}`}
        renderItem={({ item }) => <Visit item={item} />}
      />
    </View>
  );
};

export default Visits;
