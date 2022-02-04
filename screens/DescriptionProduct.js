import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
const DescriptionProduct = ({ navigation, route }) => {
  // Quantity set to 1 as the customer suppose to have atleast one item
  const [qty, setQty] = useState(1);
  const value = require("../dataStorage/Inventory");

  function setQuantity(increasedOrDecreased) {
    if (increasedOrDecreased === "increase") {
      setQty(qty + 1);
    } else {
      if (qty === 1) {
        return;
      } else {
        setQty(qty - 1);
      }
    }
  }
  console.log(route.params.paramKey);
  function addToCartAndNavigate(nextScreen) {
    // This function is called to  enter the value
    // in the cart
    const itemToCart = {
      catId: route.params.paramKey.catId,
      itemImage: route.params.paramKey.itemImage,
      itemName: route.params.paramKey.itemName,
      itemPrice: route.params.paramKey.itemPrice,
      quantity: qty,
      totalPrice: qty * route.params.paramKey.itemPrice,
    };

    value.cart.push(itemToCart);
    console.log(value.cart);
    navigation.navigate(nextScreen);
  }

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.viewContainer}>
        {/* <Image
          style={styles.imageDescStyle}
          source={route.params.paramKey.itemImage} */}
        {/* /> */}

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

        <View style={styles.productPrice}>
          <Text style={{ color: "#ffffff", fontWeight: "bold", fontSize: 25 }}>
            {route.params.paramKey.itemName}
          </Text>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#ffffff",
            }}
          >
            <TouchableOpacity
              onPress={() => setQuantity("decrease")}
              style={{ backgroundColor: "#E1E3E2" }}
            >
              {<Text style={styles.positiveNegativeView}>-</Text>}
            </TouchableOpacity>
            <Text style={styles.variableNumber}>{qty}</Text>
            <TouchableOpacity
              onPress={() => setQuantity("increase")}
              style={{ backgroundColor: "#E1E3E2" }}
            >
              {<Text style={styles.positiveNegativeView}>+</Text>}
            </TouchableOpacity>
          </View>
        </View>

        <Text
          style={{
            color: "#000000",
            fontWeight: "bold",
            fontSize: 25,
            paddingLeft: 15,
            color: "#ffffff",
          }}
        >
          {"$" + route.params.paramKey.itemPrice}
        </Text>

        <Text
          style={{
            color: "#ffffff",
            paddingLeft: 15,
            paddingRight: 15,
            marginTop: 10,
          }}
        >
          Product description Product description Product description Product
          description Product description Product description Product
          description
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => addToCartAndNavigate("CartList")}
        >
          <Text style={{ color: "#FFFFFF" }}>Add to Cart</Text>
        </TouchableOpacity>

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

export default DescriptionProduct;
