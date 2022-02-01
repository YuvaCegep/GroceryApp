import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Button,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
const SetChangeProduct = ({ navigation, route }) => {
  const [productName, onProductNameChange] = useState("");
  const [price, onPriceChange] = useState("");

  function updateTheData() {
    console.log("Update the data");
    const index = require("../dataStorage/Inventory").product.findIndex(
      (x) => x.itemName === route.params.paramKey.itemName
    );
    console.log(index);

    require("../dataStorage/Inventory").product[index].itemName = productName;
    require("../dataStorage/Inventory").product[index].itemPrice =
      parseInt(price);
    console.log(require("../dataStorage/Inventory").product[index]);
  }

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.viewContainer}>
        {typeof route.params.paramKey.itemImage === "object" ? (
          <Image
            style={styles.imageDescStyle}
            source={{ uri: route.params.paramKey.itemImage.localUri }}
          />
        ) : (
          <Image
            style={styles.imageDescStyle}
            source={route.params.paramKey.itemImage}
          />
        )}

        <TextInput
          style={{ padding: 15, color: "#ffffff" }}
          placeholderTextColor={"#808080"}
          placeholder="Enter the Product Name"
          onChangeText={onProductNameChange}
        />

        <TextInput
          style={{ padding: 15, color: "#ffffff" }}
          placeholderTextColor={"#808080"}
          placeholder="Enter the Price"
          onChangeText={onPriceChange}
        />

        <Button
          title="Save the data"
          color="#DE3856"
          onPress={() => updateTheData()}
        />

        <Ionicons
          style={{ position: "absolute", marginTop: 45, paddingLeft: 15 }}
          name="ios-arrow-back-outline"
          size={35}
          color="black"
          onPress={() => navigation.goBack()}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#24253C",
  },
  imageDescStyle: {
    height: 350,
    width: "100%",
    backgroundColor: "#ffff00",
  },
  viewContainer: {
    flex: 1,
  },
  productPrice: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  positiveNegativeView: {
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 21,
  },
  variableNumber: {
    paddingLeft: 12,
    paddingRight: 12,
    fontSize: 21,
  },
  button: {
    marginTop: 35,
    alignItems: "center",
    backgroundColor: "#DE3856",
    padding: 10,
    marginLeft: 25,
    marginRight: 25,
  },
});

export default SetChangeProduct;
