import React from "react";
import { StyleSheet, View, FlatList,Text } from "react-native";

import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeperator";
import colors from "../config/colors";
import Icon from "../components/Icon";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import useAuth from "../auth/useAuth";

import config from "../config/config"

const menuItems = [
  {
    title: "Profile",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },

    targetScreen: routes.PROFILE,
  },
  
  {
    title: "Notifications",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: routes.MESSAGES,
  },
];

function AccountScreen({ navigation }) {
  const { user, logOut } = useAuth();
  const name = "N:"+user.data.firstname+" |E:"+ user.data.email ;


  const handleOut =async ()=>{
  
    logOut()

  }



  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      </View>
      <View style={styles.container}>
      
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
            
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        onPress={() => handleOut()}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 2,
  },
  title: {
    borderRadius:5,
    padding:10,
    margin: 10,
    fontSize:12,
    alignSelf:"center",
    fontStyle:"normal",
    backgroundColor:colors.primary,
    color:"white"
  },
});

export default AccountScreen;
