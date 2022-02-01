import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  Text,
} from "react-native";

const CartView = ({ name, prodImage, price, quantity, totalPrice }) => {
  console.log(name);
  return (
    <View style={styles.cellView}>
      {/* <Image style={styles.imageView} source={prodImage} />
       */}

      {typeof prodImage === "object" ? (
        <Image style={styles.imageView} source={{ uri: prodImage.localUri }} />
      ) : (
        <Image style={styles.imageView} source={prodImage} />
      )}

      <View style={{ flex: 1 }}>
        <Text style={styles.productHeading}>{name}</Text>
        <Text>Price: ${price} </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text>Qty: {quantity} </Text>
          <Text style={{ marginRight: 10 }}> ${totalPrice} </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default CartView;
