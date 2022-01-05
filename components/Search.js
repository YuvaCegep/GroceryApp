import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
  TextInput,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const Search = ({ hint, changedText, submitClick }) => {
  //   const [search, setChangeSearch] = useState("");

  return (
    <View style={styles.searchView}>
      <Feather
        style={{
          alignSelf: "center",
          marginLeft: 8,
        }}
        name="search"
        size={24}
        color="black"
      />
      <TextInput
        style={{
          flex: 1,
          marginLeft: 3,
        }}
        placeholder={hint}
        onChangeText={(newText) => {
          changedText(newText);
        }}
        onSubmitEditing={() => {
          // console.log("Hello from inside");
          submitClick();
          // submitClick
        }}
        autoCorrect={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchView: {
    height: 50,
    backgroundColor: "#EAEAEA",
    marginTop: 15,
    marginLeft: 25,
    marginRight: 25,
    flexDirection: "row",
    marginBottom: 5,
  },
});

export default Search;
