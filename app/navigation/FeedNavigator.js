import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingScreen from "../screens/ListingScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: true }}>
    <Stack.Screen name="MyTasks" component={ListingScreen} />
    <Stack.Screen name="TicketDetails" component={ListingDetailsScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;
