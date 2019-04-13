import React, { Component } from "react";
import { Text, StyleSheet, View, Button, TextInput } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Icon } from "react-native-elements";
export default class StudyInput extends Component {
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
          alignItems: "center",
          position: "relative"
        }}
      >
        <View style={{ top: 170, position: "absolute" }}>
          <Icon
            name="stethoscope"
            size={100}
            type="font-awesome"
            color="#2d88ff"
          />
        </View>
        <TextInput
          style={{
            height: 50,
            width: 300,
            borderColor: "#adadad",
            borderWidth: 1,
            borderRadius: 5
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
