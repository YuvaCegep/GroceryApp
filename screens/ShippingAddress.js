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
import Checkbox from "expo-checkbox";
import { setUserName, setPassword } from "../components/Storage";

import AsyncStorage from "@react-native-async-storage/async-storage";

const ShippingAddress = ({ navigation, route }) => {
  //  Fields related to shipping address
  const [userNameText, onUserNameChange] = useState("");
  const [emailText, onEmailChange] = useState("");
  const [address, onAddressChange] = useState("");
  const [pincode, onPincodeChange] = useState("");
  const [city, onCityChange] = useState("");

  const orderData = require("../dataStorage/Inventory");

  // Navigaiton if all the fields are filled
  function navigateToConfirm() {
    if (
      userNameText === "" ||
      emailText === "" ||
      address === "" ||
      pincode === "" ||
      city === ""
    ) {
      Alert.alert("Alert", "Please enter all the fields", [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    } else {
      createOrderId();
      navigation.navigate("ConfirmScreen", { paramKey: orderId });
    }
  }

  // Random order id generated
  const orderId = Math.floor(100000 + Math.random() * 900000);

  // This will create order object and will save it in the order list
  function createOrderId() {
    const shippingDetails = {
      firstLastName: userNameText,
      email: emailText,
      address: address,
      pincode: pincode,
      city: city,
    };

    const createOrderObj = {
      orderId: orderId,
      cartValue: orderData.cart,
      totalValue: route.params.paramKey,
      shippingDetails: shippingDetails,
    };

    orderData.orders.push(createOrderObj);

    console.log(orderData.orders);
  }

  const [isChecked, setChecked] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <TextInput
        placeholderTextColor={"#808080"}
        placeholder="Name (first and last)"
        style={styles.userInput}
        onChangeText={onUserNameChange}
      />
      <TextInput
        placeholderTextColor={"#808080"}
        placeholder="Email"
        style={styles.userPassword}
        onChangeText={onEmailChange}
      />

      <TextInput
        placeholderTextColor={"#808080"}
        placeholder="Address"
        style={styles.userPassword}
        onChangeText={onAddressChange}
      />

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TextInput
          placeholderTextColor={"#808080"}
          placeholder="Pincode"
          style={styles.pincodeAndCity}
          onChangeText={onPincodeChange}
        />

        <TextInput
          placeholderTextColor={"#808080"}
          placeholder="City"
          style={styles.pincodeAndCity}
          onChangeText={onCityChange}
        />
      </View>

      <View style={styles.checkBoxParent}>
        <View style={styles.checkBoxView}>
          <Checkbox
            style={{ marginRight: 12, marginTop: 3 }}
            value={isChecked}
            onValueChange={setChecked}
          />
          <Text style={{ color: "#FFFFFF" }}>
            Save the address for future reference
          </Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => navigateToConfirm()}
        style={styles.button}
      >
        <Text style={{ color: "#FFFFFF" }}>
          Place the order ${route.params.paramKey}
        </Text>
      </TouchableOpacity>

      <View
        style={{
          height: 60,
          marginTop: 45,
          position: "absolute",
          bottom: 0,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        {/* <Text style={{ color: "#FFFFFF", marginRight: 15 }}>
          Already have an account?
        </Text>
        <TouchableOpacity onPress={() => navigateToLogin(false)}>
          <Text style={{ color: "#DE3856" }}>Sign in</Text>
        </TouchableOpacity> */}
      </View>
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
    marginTop: 25,
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
  pincodeAndCity: {
    marginTop: 15,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "#DE3856",
    color: "#FFFFFF",
    marginLeft: 25,
    marginRight: 25,
    flex: 1,
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

export default ShippingAddress;
