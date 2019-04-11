import React, { Component } from "react";
import { Text, StyleSheet, View, Button, TextInput } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

export default class Details extends Component {
  constructor() {
    super();
    this.state = {
      text: ""
    };
  }
  render() {
    console.log(this.state.text);
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <TextInput
          style={{
            height: 40,
            width: 300,
            borderColor: "gray",
            borderWidth: 1
          }}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
        <Button
          onPress={() => this.props.navigation.navigate("Main")}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
