import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Dimensions,
  ImageBackground,
  Image,
  TouchableHighlight,
} from "react-native";
import PropTypes from "prop-types";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import Icon from "../components/Icon";
import colors from "../config/colors";
import ListItemSeperator from "../components/ListItemSeperator";

const menuItems = [
  {
    title: "My listing",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: "Messages",
  },
];
const screenWidth = Math.round(Dimensions.get("window").width / 2.5);
const screenHeight = Math.round(Dimensions.get("window").height) / 3;
console.log(screenWidth);
const onPress = () => {
  console.log(1);
};

function HomeScreen({ navigation }) {
  return (
    <Screen>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            width: "100%",
            height: screenHeight,
            backgroundColor: "white",
            borderRadius: 15,
          }}
        >
          <Text style={styles.textlo1}>
            La patisserie qui raconte des histoires, des histoires d’amour, des
            promenades dans la nature, des coups de cœur pour un parfum, un
            arbre, un voluptueux cachemire
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            height: screenHeight,
            backgroundColor: "skyblue",
          }}
        >
          <Text style={styles.texthead}>Order and Delivery made easier</Text>
        </View>
        <View
          style={{
            width: "100%",
            height: screenHeight,
          }}
        >
          <ImageBackground
            style={styles.backdown}
            source={require("../assets/cookie.png")}
          />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,

    justifyContent: "center",

    alignItems: "center",
    backgroundColor: "#ececec",
  },

  background: {
    flex: 1,
    justifyContent: "flex-end",
    borderRadius: 20,
    alignItems: "center",
    width: "100%",
    height: 100,
  },

  backdown: {
    flex: 1,
    justifyContent: "flex-end",
    borderRadius: 20,
    alignItems: "flex-end",
    width: "50%",
    height: screenHeight,
  },

  container1: {
    backgroundColor: "#ffffff",
    borderRadius: 6,
    flex: 1,
    width: "100%",
    height: 100,
  },

  texthead: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 28,
    justifyContent: "center",
    alignContent: "flex-start",

    padding: 10,
  },
  textlo1: {
    color: "#3f3934",
    padding: 10,
    fontSize: 12,
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    padding: 5,
    margin: 5,
  },

  container2: {
    backgroundColor: "#ffffff",
    borderRadius: 6,
    flex: 1,
    width: "100%",
    height: 100,
  },
  container3: {
    backgroundColor: "#ffffff",
    borderRadius: 6,
    width: screenWidth,
    height: screenHeight,
  },
  logo2: {
    fontSize: 30,
    marginTop: 20,
    alignSelf: "center",
    justifyContent: "center",
    width: "50%",
    height: "50%",
  },
  logo3: {
    fontSize: 30,
    marginTop: 1,
    alignSelf: "center",
    justifyContent: "center",
    width: 300,
    height: 100,
  },
  text3: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 18,
    backgroundColor: "white",
  },
});

export default HomeScreen;
