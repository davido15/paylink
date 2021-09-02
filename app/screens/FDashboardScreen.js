import React from "react";
import { View, StyleSheet, Text } from "react-native";

function FDashboardScreen(props) {
  return (
    <View style={styles.container}>
      {" "}
      <Text>Good Dashboard loading</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignContent: "center", marginTop: "50%" },
});

export default FDashboardScreen;
