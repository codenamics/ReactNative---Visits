import React from "react";
import { createAppContainer } from "react-navigation";
import Nav from "./navigation/Nav";

export default createAppContainer(Nav, {
  defaulNavigationOptions: {
    header: null
  }
});
