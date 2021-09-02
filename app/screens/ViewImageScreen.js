import React from "react";
import PropTypes from "prop-types";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" size={40} color="black" />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons name="trash-can-outline" size={40} color="black" />
      </View>
      

      <Image
        style={styles.image}
        resizeMode="contain"
        source={require("../assets/viewback.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    
    width: 50,
    height: 50,
    position: "absolute",
    top: 30,
    left: 30,
  },
  deleteIcon: {
    
    width: 50,
    height: 50,
    position: "absolute",
    top: 30,
    right: 30,
  },
  container: {
    backgroundColor: colors.white,
    flex: 1,
    top: "6%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
