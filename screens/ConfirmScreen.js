import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

import { StatusBar } from "expo-status-bar";

const ConfirmScreen = ({ navigation, route }) => {
  // This is done to empty the cart list
  require("../dataStorage/Inventory").cart.length = 0;

  console.log("clear valuee ----" + require("../dataStorage/Inventory").cart);

  function navigateTo() {
    navigation.navigate("Dashboard");
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.textHeading}>Order Confirmed</Text>

      <Text
        style={{
          color: "#ffffff",
          alignSelf: "center",

          marginTop: 25,
        }}
      >
        Your order id is: {route.params.paramKey}
      </Text>

      <Text
        style={{
          color: "#ffffff",
          alignSelf: "center",
          marginTop: 10,
        }}
      >
        It will be delivered in 30 minutes.
      </Text>

      <Text
        style={{
          color: "#ffffff",
          alignSelf: "center",

          marginTop: 25,
        }}
      >
        Thank You!!
      </Text>

      <TouchableOpacity
        onPress={() => navigateTo("Dashboard")}
        style={styles.button}
      >
        <Text style={{ color: "#FFFFFF" }}>Back To Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#24253C",
    paddingTop: 25,
  },
  textHeading: {
    color: "#FFFFFF",
    fontSize: 35,
    marginLeft: 25,
    marginTop: 60,
  },
  userInput: {
    marginTop: 45,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "#DE3856",
    color: "#FFFFFF",
    marginLeft: 25,
    marginRight: 25,
  },
  userPassword: {
    marginTop: 15,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "#DE3856",
    color: "#FFFFFF",
    marginLeft: 25,
    marginRight: 25,
  },
  btnStyle: {
    marginLeft: 25,
    marginRight: 25,
  },
  button: {
    marginTop: 35,

    alignItems: "center",
    backgroundColor: "#DE3856",
    padding: 10,
    marginLeft: 25,
    marginRight: 25,
  },
  checkBoxView: {
    flexDirection: "row",
  },
  checkBoxParent: {
    marginLeft: 25,
    marginRight: 25,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default ConfirmScreen;
