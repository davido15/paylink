import React, { useState } from "react";
import PropTypes from "prop-types";
import { View, Image, StyleSheet, Text } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import ErrorMessage from "../components/ErrorMessage";
import AppButton from "../components/AppButton";
import AppFormField from "../components/AppFormField";
import SubmitButton from "../components/SubmitButton";
import AppForm from "../components/AppForm";


import config from "../config/config";



function RegisterScreen(props) {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [name, setname] = useState();
  const [loginFailed, setLoginFailed] = useState(false);
  const useauth = useAuth();
  const [error, setError] = useState();

  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
    password1: Yup.string().required().min(4).label("Password Confirm").test('passwords-match', 'Passwords must match ', function(value) {
      return this.parent.password === value;
    }),
    
    
  });


  const handleSubmit = async ({ email, password }) => {
    const response = await getresponsefire({ email, password });
  };



  const getresponsefire = ({ email, password }) => {
    console.log(email, password);
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }

    console.log("Traceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee0");


      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode)
        setLoginFailed(true);
        setError(errorCode)
      });

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log(user); // It shows the Firebase user
        console.log(firebase.auth().user); // It is still undefined
        user.getIdToken().then(function (idToken) {
          
          const newuser = idToken; // It shows the Firebase token now
console.log("my new user token is ,..............."+newuser)
            setLoginFailed(false);
            useauth.logIn(newuser);

        });
      }
      
    });
  };






  return (
    <Screen style={styles.container}>
      <Text style={styles.title}> Welcome </Text>

      <Text style={styles.subtile}>Seathiel's Restaurant</Text>

      <AppForm
        initialValues={{ email: "", password: "" ,password1: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
       
      <ErrorMessage error={error} visible={loginFailed} />
        <AppFormField
          autoCapitalise="none"
          autoCorrect={false}
          name="email"
          keyboardType="email-address"
          icon="email"
          placeholder="Your Email"
          textContentType="emailAddress"
        />

        <AppFormField
          autoCapitalise="none"
          autoCorrect={false}
          name="password"
          icon="lock"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
         <AppFormField
          autoCapitalise="none"
          autoCorrect={false}
          name="password1"
          icon="lock"
          placeholder="Confirm Password"
          secureTextEntry
          textContentType="password"
        />

        <SubmitButton color="primary" title="Register" />
      </AppForm>

     
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    alignSelf: "center",
    marginTop: 50,
  },
  subtile: {
    color: "#1F8EFA",
    fontSize: 20,
    alignSelf: "center",
    marginBottom: 40,
  },
  logo2: {
    
    marginTop: 50,
    alignSelf: "center",
    justifyContent: "flex-end",
  },
});

export default RegisterScreen;
