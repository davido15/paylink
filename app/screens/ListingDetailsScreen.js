
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import AppButton from "../components/AppButton"
import AppTextInput from "../components/AppTextInput"
import { View, Image, StyleSheet, Modal, Text, TouchableHighlight, TextInput, ScrollView ,Alert} from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";
import auth from "../api/auth";
import listingsApi from "../api/listings";

function ListingDetailsScreen({ route }) {
  const listing = route.params;
  const mobile = listing.mobile;
  
  const taskid = listing.id;
  const status = listing.status;

  const [value, onChangeText] = useState('Your Update is Here');
  const [buttonmsg, setbuttonmsg] = useState(mobile);
  const [listings, setListings] = useState([]);
  const [visible, setVisible] = useState(false);

 

  const taskUpdate = async () => {
 
    
    console.log(mobile,value)
if (mobile =="AcceptTask"){
  const result = await auth.acceptTask(taskid, mobile,value);
 
  Alert.alert("Sucessfully updated")

  setVisible(false)

  console.log(response)
}
    if(mobile=="CloseTask"){
      const result = await auth.closeTask(taskid, mobile,value);

      Alert.alert("Sucessfully updated")

      setVisible(false)
      console.log(result)
  }

  if(mobile=="RateTask"){
    const result = await auth.rateTask(taskid, mobile,value);
    Alert.alert("Sucessfully updated")

    setVisible(false)
    console.log(result)
}


  }
  console.log(listing.url);
 
  const imageUrl = "http://c391c9fc812f.ngrok.io"+listing.url;
  console.log(imageUrl);
  
  return (

    <View style={styles.container}>
      <View style={styles.centeredView}>
      <Modal animationType={"slide"} transparent={true}
        visible={visible}
        onRequestClose={() => {  Alert.alert("Modal has been closed."); }}>
        <Image style={styles.image} source={{ uri: imageUrl }} />
        

        <View style={styles.modalView}>

        <TouchableHighlight onPress={() => {
            setVisible(false)
            Alert.alert("Modal has been closed.")
          }}>

            <Text style={styles.textStyle}>Hide</Text>

          </TouchableHighlight>
           <Text style={styles.titlemodal}>Add Update # {taskid}</Text>
          <TextInput style={styles.multiline} multiline
            numberOfLines={10}
            onChangeText={text => onChangeText(text)}
            value={value}
          >
          </TextInput>
        

          <View style={styles.appbutton}>
            <AppButton color={status} title="submit" onPress={taskUpdate}></AppButton>
          </View>
          </View>
         
   
      </Modal>
      </View>
 

      <Image style={styles.image} source={{ uri: imageUrl }} />

      <View style={styles.detailsContainer}>
        <AppText style={styles.title}> # {listing.id} | {listing.title} </AppText>
        <View style={styles.userContainer}>
          <ScrollView style={styles.scrollView}>
            <AppText style={styles.price} >{listing.content}</AppText>
          </ScrollView>
        </View>
        <AppText style={styles.title}>Work Details</AppText>
        <ScrollView>
        <View style={styles.userContainer}>
          <AppText style={styles.subtitle}>Created At : {listing.createdAt} | Created By : {listing.creator} </AppText>
          <AppText style={styles.subtitle}>Priority  : {listing.priority} |  Category : {listing.category} </AppText>
          <AppText style={styles.subtitle}>Status  : {listing.status} |  SLA : {listing.sla} </AppText>
          <AppText style={styles.subtitle}>Resp  : {listing.mttr} |  MTTR : {listing.mttr} </AppText>
          <AppText style={styles.subtitle}>Assignto  : {listing.assignee} |  Expected : {listing.expected} </AppText>
      
        
        </View>
        </ScrollView>
    

      
      </View>

      <View style={styles.appbutton}>
        <AppButton color={status} title={listing.mobile} onPress={() => { setVisible(true) }}></AppButton>
      </View>

    </View>

  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
 
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  container: {
    flex: 1,
    alignItems: 'center'
  },
  scrollView: {
    backgroundColor: colors.light,

    height: 150
  },
  image: {
    width: "100%",
    height: 30,

  },
  detailsContainer: {
    padding: 20,
    width: "100%",
  },
  userContainer: {
    width: "100%",
    backgroundColor: colors.light,
    padding: 10,
    borderRadius: 0,
    margin:5,



    shadowColor: "#ebe9e9",
    shadowOffset: {
      width: 0,
      height: 1,
    },

    elevation: 2,

  },


  appbutton: {


    justifyContent: 'flex-end',
    marginBottom: 0,
    position: "absolute",
    bottom: 0,
    width: "95%",


    shadowColor: "#ebe9e9",
    shadowOffset: {
      width: 0,
      height: 1,
    },

    elevation: 2,

  },
  price: {
    color: colors.black,
    fontWeight: "normal",
    fontSize: 18,
    marginVertical: 10,
  },
  multiline: {
    color: colors.black,
    borderWidth: 1,
    borderColor: "black",
    fontWeight: "normal",
    fontSize: 18,
    marginVertical: 1,
    width: "90%",
    height:"40%"
  },

  subtitle: {
    color: colors.secondary,
    fontWeight: "normal",
    fontSize: 10,
    marginVertical: 10,
  },
  title: {

    marginTop: 10,
    marginBottom: 7,
    color: colors.black,
    fontSize: 24,
    fontWeight: "500",
    fontWeight: "bold",
  },
  titlemodal: {
    marginTop: 10,
    marginBottom: 7,
    color: colors.black,
    fontSize: 18,
    fontWeight: "500",
    fontWeight: "bold",
  },
  ListingDetailsScreen: {
    margin: 50,
    color: colors.black,
    fontSize: 24,
    fontWeight: "500",
    fontWeight: "bold",

  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 2
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    borderRadius: 10,
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#d3d3d3",
    padding: 8
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }


});

export default ListingDetailsScreen;
