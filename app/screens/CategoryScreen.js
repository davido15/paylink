import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Dimensions,
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
const screenHeight = Math.round(Dimensions.get("window").height) / 5;
console.log(screenWidth);
const onPress = () => {
  console.log(1);
};

function CategoryScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <View>

        <TouchableHighlight
          underlayColor="#fde0d7"
          onPress={() => navigation.navigate("Created",{status:"Created"})}
          
        >
          <View style={styles.container1}>
            <Image
              style={styles.logo2}
              source={require("../assets/assigned.png",)}
            />

            <Text>Asssigned</Text>
          </View>
        </TouchableHighlight>


        <TouchableHighlight
          underlayColor="#fde0d7"
          onPress={() => navigation.navigate("Completed",{status:"Completed"})}
          
        >
        <View style={styles.container2}>
          <Image
            style={styles.logo2}
            source={require("../assets/inprogress.png")}
          />
          <Text>Inprogress</Text>
        </View>
        </TouchableHighlight>

        <TouchableHighlight
          underlayColor="#fde0d7"
          onPress={() => navigation.navigate("Completed",{status:"Completed"})}
          
        >
        <View style={styles.container2}>
          <Image
            style={styles.logo2}
            source={require("../assets/completed.png")}
          />
          <Text>Completed</Text>
        </View>
        </TouchableHighlight>

     
      </View>




      

      <View>


      <TouchableHighlight
          underlayColor="#fde0d7"
          onPress={() => navigation.navigate("Assigned",{status:"Assigned"})}
          
        >

        <View style={styles.container2}>
          <Image
            style={styles.logo2}
            source={require("../assets/high.png")}
          />
          <Text>High Priority</Text>
        </View>

        </TouchableHighlight>

        <TouchableHighlight
          underlayColor="#fde0d7"
          onPress={() => navigation.navigate("Assigned",{status:"Assigned"})}
          
        >

        <View style={styles.container2}>
          <Image
            style={styles.logo2}
            source={require("../assets/medium.png")}
          />
          <Text>Medium Priority</Text>
        </View>

        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="#fde0d7"
          onPress={() => navigation.navigate("Inprogress",{status:"Inprogress"})}
          
        >

        <View style={styles.container2}>
          <Image
            style={styles.logo2}
            source={require("../assets/low.png")}
          />
          <Text>Low Priority</Text>
        </View>

        </TouchableHighlight>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "stretch",
    alignItems: "center",
    backgroundColor: "#ececec",
  },
  container1: {
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    width: screenWidth,
    height: screenHeight,
    borderRadius: 6,

    margin: 10,
  },
  container2: {
    backgroundColor: "#f8f9ff",
    borderRadius: 6,

    width: screenWidth,
    height: screenHeight,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  logo2: {
    fontSize: 30,
    marginTop: 20,
    alignSelf: "center",
    justifyContent: "center",
    width: "50%",
    height: "50%",
  },
});

export default CategoryScreen;
