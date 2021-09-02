import React from "react";
import { View, StyleSheet, ActivityIndicator, Button } from "react-native";

function FLoginScreen(props) {
  return (
    <View style={styles.container}>
      <Button
        title="login with google"
        onPress={() => console.log("pressed")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignContent: "center", marginTop: "50%" },
});

export default FLoginScreen;
