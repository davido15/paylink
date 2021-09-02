import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  Alert,
  Platform,
  StatusBar,
} from "react-native";

export default function App() {
  const handlePress = () => console.log("Test Pressed");

  return (
    <View style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress} style={containerStyle}>
        Lorem Ipsum has been the industry standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book
      </Text>
      <TouchableHighlight onPress={() => console.log("Text Console")}>
        <Image
          fadeduration={1000}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableHighlight>

      <Button title="Press me" onPress={() => console.log("i am a Button")} />

      <Button 
        style={buttonStyle}
        title="Click Me"
        onPress={() =>
          Alert.alert("My title", "myMessage", [
            { text: "yes", onPress: () => console.log("i am yes") },
            { text: "No", onPress: () => console.log("i am No") },
          ])
        }
      />

      <Button
        style={buttonStyle}
        title="Prompt me"
        onPress={() => Alert.prompt("my title", "mymessage")}
      />
    </View>
  );
}
const containerStyle = {
  backgroundColor: "#ccc",
  padding: Platform.OS === "android" ? 20 : 0,
};

const buttonStyle = {
  backgroundColor: "blue",
  padding: Platform.OS === "android" ? StatusBar.currentHeight : 0,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    margin: 5,
  },
});
