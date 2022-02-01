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
import OrderView from "../components/OrderView";

const OrderList = () => {
  console.log(require("../dataStorage/Inventory").orders);

  const renderOrderItem = ({ item }) => {
    return (
      <OrderView
        orderId={item.orderId}
        totalPrice={item.totalValue}
        totalItems={item.cartValue.length}
        name={item.shippingDetails.firstLastName}
        address={item.shippingDetails.address}
        email={item.shippingDetails.email}
        city={item.shippingDetails.city}
        pincode={item.shippingDetails.pincode}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={require("../dataStorage/Inventory").orders}
        renderItem={renderOrderItem}
        keyExtractor={(item) => Math.random()}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#24253C",
  },
});

export default OrderList;
