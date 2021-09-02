import React, { useState,useEffect } from "react";
import { create } from "apisauce";
import { FlatList, StyleSheet, View, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Card from "../components/Card";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import ActivityIndicator from "../components/ActivityIndicator";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import ListItemSeperator from "../components/ListItemSeperator";
import ListItemDelete from "../components/ListItemDelete";
import colors from "../config/colors";
import routes from "../navigation/routes";


function CategoryDetails({ navigation,route }) {
 
  const status = route.params.status
  console.log(status)

  const apiClient = create({
    baseURL: "https://703dd5215973.ngrok.io/ticketsys/api/auth/getListing.php",
  });

const endpoint = "/listings";

if(status=="Completed"){
  apiClient.setBaseURL('https://703dd5215973.ngrok.io/ticketsys/api/auth/Completed.php')
}
if(status=="Created"){
  apiClient.setBaseURL('https://703dd5215973.ngrok.io/ticketsys/api/auth/Created.php')
}

if(status=="Assigned"){
  apiClient.setBaseURL('https://703dd5215973.ngrok.io/ticketsys/api/auth/Assigned.php')
}

if(status=="Inprogress"){
  apiClient.setBaseURL('http://4478ad712125.ngrok.io/ticketsys/api/auth/Inprogress.php')
}

const getListings = () => apiClient.get(endpoint);



 

  const [messages, setMessages] = useState();

  
  const [listings, setListings] = useState([]);
  const [error, setError] = useState([false]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadListings();
  }, []);




  const loadListings = async () => {
    setLoading(true);
    const response = await getListings();
    setLoading(false);

    if (!response.ok) return setError(true);

    setError(false);
   console.log( setListings(response.data));

  };


  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>Couldn't retrieve the listings</AppText>

          <AppButton title="Retry" onPress={loadListings} />
        </>
      )}

      <ActivityIndicator visible={loading} />

      

      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            color={item.status}
            title={item.title}
            status={item.status}
            createdat={item.createdat}
            createdby={item.createdby}
            subTitle={item.description}
            imageUrl={item.url}
           
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  image: {
    
    width: "100%",
    height: 130,
  },
  screen: {
    backgroundColor: colors.light,
    margin:10
  },
});

export default CategoryDetails;
