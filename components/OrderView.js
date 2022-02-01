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

const OrderView = ({
  orderId,
  totalPrice,
  totalItems,
  name,
  address,
  email,
  city,
  pincode,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Order id: {orderId}</Text>
      <Text style={styles.textStyle}>Price: {totalPrice}</Text>
      <Text style={styles.textStyle}>Total Items: {totalItems}</Text>
      <Text style={styles.textStyle}>Name: {name}</Text>
      <Text style={styles.textStyle}>Address: {address}</Text>
      <Text style={styles.textStyle}>Email: {email}</Text>
      <Text style={styles.textStyle}>City: {city}</Text>
      <Text style={styles.textStyle}>Pincode: {pincode}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#24253C",
    marginBottom: 50,
  },
  textStyle: {
    color: "#ffffff",
    margin: 10,
  },
});

export default OrderView;
