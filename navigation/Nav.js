import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation";

import Main from "../components/Main";
import Details from "../components/Details";

export default createStackNavigator(
  {
    Main,
    Details
  },
  {
    initialRouteName: "Details",
    defaultNavigationOptions: {
      //   header: null,
      headerStyle: {
        borderBottomColor: "transparent",
        marginTop: 24
      }
    }
  }
);
