import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../screens/AccountScreen";
import MessagesScreen from "../screens/MessagesScreen";
import CategoryScreen from "../screens/CategoryScreen";
import ListingScreen from "../screens/ListingScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import CategoryDetails from "../screens/CategoryDetails";

const Stack = createStackNavigator();

const CategoryNavigator = ({ typecat }) => (
  <Stack.Navigator>
    <Stack.Screen name="Search" component={CategoryScreen} />
    <Stack.Screen name="Completed" component={CategoryDetails} />
    <Stack.Screen name="Created" component={CategoryDetails} />
    <Stack.Screen name="Assigned" component={CategoryDetails} />
    <Stack.Screen name="Inprogress" component={CategoryDetails} />
    <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} />
  </Stack.Navigator>
);

export default CategoryNavigator;
