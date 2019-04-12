import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation";

import Main from "../components/Main";
import StudyInput from "../components/StudyInput";

export default createStackNavigator(
  {
    Main,
    StudyInput
  },
  {
    initialRouteName: "StudyInput",
    defaultNavigationOptions: {
      //   header: null,
      headerStyle: {
        borderBottomColor: "transparent",
        marginTop: 24
      }
    }
  }
);
