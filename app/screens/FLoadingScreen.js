import React from "react";
import { View, StyleSheet, Text, ActivityIndicator, Alert } from "react-native";
import firebase from "firebase";
import jwtDecode from "jwt-decode";
import config from "../config/config";

function FLoadingScreen(props) {
  firebase.initializeApp(config);

  try {
    const result = firebase
      .auth()
      .signInWithEmailAndPassword("daaved@gmail.com", "1234567")
      .catch((error) => {
        Alert.alert(error.message);
      });

      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log(user); // It shows the Firebase user
            console.log(firebase.auth().user); // It is still undefined
            user.getIdToken().then(function(idToken) {  // <------ Check this line
               console.log(jwtDecode(idToken)); // It shows the Firebase token now
            });
        }
    });
  } catch (Error) {
    console.log(Error);
  }

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="blue" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignContent: "center", marginTop: "50%" },
});

export default FLoadingScreen;
