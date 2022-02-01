import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  Text,
} from "react-native";

const Admin = ({ navigation }) => {
  require("../dataStorage/Inventory").product[0].itemName = "Appple";
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("AdminAddProduct");
        }}
      >
        <Text style={styles.textStyle}>Add Product</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ChangeProductDesc");
        }}
      >
        <Text style={styles.textStyle}>Change Product Pricing</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("OrderList");
        }}
      >
        <Text style={styles.textStyle}>Orders</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: "#ffffff",
    backgroundColor: "#DE3856",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 25,
    paddingRight: 25,
    marginTop: 25,

    alignSelf: "center",
  },
  container: {
    backgroundColor: "#24253C",
    flex: 1,
    alignContent: "center",
  },
});

export default Admin;
