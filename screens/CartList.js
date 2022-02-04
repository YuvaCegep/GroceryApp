import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  Text,
} from "react-native";
import CartView from "../components/CartView";
import { StatusBar } from "expo-status-bar";

const CartList = ({ navigation, route }) => {
  const cartList = require("../dataStorage/Inventory");

  let totalValue = 0;

  // To calculate the total value of the cart
  function totalPriceOfCart() {
    for (let i = 0; i < cartList.cart.length; i++) {
      totalValue += cartList.cart[i].totalPrice;
    }
  }

  // Navigation to the next screen with the parameters
  function navigateToShipping() {
    navigation.navigate("ShippingAddress", { paramKey: totalValue });
  }

  // Cell for the cart items
  const renderCartItem = ({ item }) => {
    return (
      <CartView
        name={item.itemName}
        prodImage={item.itemImage}
        price={item.itemPrice}
        quantity={item.quantity}
        totalPrice={item.totalPrice}
      />
    );
  };

  totalPriceOfCart();

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <FlatList
        style={{ flex: 0.9, marginBottom: 5 }}
        data={cartList.cart}
        renderItem={renderCartItem}
        keyExtractor={(item) => Math.random()}
        showsHorizontalScrollIndicator={false}
      />

      <View
        style={{
          flex: 0.1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ justifyContent: "center", marginLeft: 15 }}>
          <Text style={{ color: "#ffffff" }}>Total Price </Text>
          <Text style={{ color: "#ffffff", fontSize: 18, fontWeight: "bold" }}>
            ${totalValue}
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => navigateToShipping()}
          style={{ marginRight: 15, justifyContent: "center" }}
        >
          <Text
            style={{
              color: "#ffffff",
              backgroundColor: "#DE3856",
              borderRadius: 8,
              paddingLeft: 20,
              paddingRight: 20,
              paddingTop: 8,
              paddingBottom: 8,
            }}
          >
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#24253C",
  },
  imageView: {
    width: 80,
    height: 80,
    margin: 10,
  },
  cellView: {
    flexDirection: "row",
    borderRadius: 8,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "#ffffff",
    marginTop: 10,
  },

  productHeading: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: "bold",
  },
});

export default CartList;
