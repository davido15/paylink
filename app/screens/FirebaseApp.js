import React from "react";
import { View, StyleSheet, Text } from "react-native";
import {
  createSwitchNavigator,
  createAppContainer,
  createStackNavigator,
} from "react-navigation";

import FLoginScreen from "./FLoginScreen";
import FDashboardScreen from "./FDashboardScreen";
import FLoadingScreen from "./FLoadingScreen";

import * as firebase from "firebase";
import firebaseConfig from "../config/config";

function FirebaseApp(props) {


  const AppSwitchNavigator = createSwitchNavigator({
    FLoadingScreen: FLoadingScreen,
    FLoginScreen: FLoginScreen,
    FDashboardScreen: FDashboardScreen,
  });
  const AppNavigator = createAppContainer(AppSwitchNavigator);

  return <AppNavigator></AppNavigator>;
}

const styles = StyleSheet.create({
  container: { flex: 1, alignContent: "center", marginTop: "50%" },
});

export default FirebaseApp;
