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
const DescriptionProduct = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.viewContainer}>
        <Image
          style={styles.imageDescStyle}
          source={require("../assets/dairy.jpg")}
        />
        <View style={styles.productPrice}>
          <Text style={{ color: "#000000", fontWeight: "bold", fontSize: 25 }}>
            Product Name
          </Text>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#ffffff",
              borderRadius: 100,
            }}
          >
            <Text style={styles.positiveNegativeView}>-</Text>
            <Text style={styles.variableNumber}>0</Text>
            <Text style={styles.positiveNegativeView}>+</Text>
          </View>
        </View>

        <Text
          style={{
            color: "#000000",
            fontWeight: "bold",
            fontSize: 25,
            paddingLeft: 15,
          }}
        >
          $25
        </Text>

        <Text style={{ paddingLeft: 15, paddingRight: 15, marginTop: 10 }}>
          Product description Product description Product description Product
          description Product description Product description Product
          description
        </Text>

        <TouchableOpacity style={styles.button}>
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
  container: {},
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
    backgroundColor: "#E1E3E2",
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 3,
    paddingBottom: 3,
  },
  variableNumber: {
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 3,
    paddingBottom: 3,
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
