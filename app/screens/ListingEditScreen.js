import React, { useState } from "react";
import PropTypes from "prop-types";
import { View, Image, StyleSheet, Text } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import Screen from "../components/Screen";

import AppFormField from "../components/AppFormField";
import SubmitButton from "../components/SubmitButton";
import AppForm from "../components/AppForm";

import AppFormPicker from "../components/AppFormPicker";
import CategoryPickerItem from "../components/CategoryPickerItem";
import AppFormImagePicker from "../components/AppFormImagePicker";
import useLocation from "../hooks/useLocation";

import listingsApi from "../api/listings";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least 1 image"),
});

const categories = [
  { label: "Furniture", value: 1, backgroundColor: "black", icon: "apps" },
  { label: "Clothing", value: 2, backgroundColor: "black", icon: "apps" },
  { label: "Camera", value: 3, backgroundColor: "black", icon: "apps" },
];

function ListingEditScreen() {
  const location = useLocation();

  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);

    const result = await listingsApi.addListing(
      { ...listing, location },
      (progress) => setProgress(progress)
    );

    if (!result.ok) {
      setUploadVisible(false);
      return console.log("couldnt save");
    }
    resetForm();
  };

  return (
    <Screen style={styles.container}>
      <UploadScreen
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}
      />

      <Text style={styles.title}> Create Ticket </Text>

      <Text style={styles.subtile}>fill and submit</Text>

      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppFormImagePicker name="images" />

        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
        />
         <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
        />
         <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
        />
       
        <AppFormPicker
          items={categories}
          numofColumns={3}
          name="category"
          placeholder="Category"
          PickerItemComponent={CategoryPickerItem}
        />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Create" />
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
    color:"#1F8EFA",
    alignSelf: "center",
    marginTop: 50,
  },
  subtile: {
    color: "#2F3B52",
    fontSize: 20,
    alignSelf: "center",
    marginBottom: 40,
  },
});
export default ListingEditScreen;
