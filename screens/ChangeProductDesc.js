import React from "react";
import { StyleSheet, View, TouchableOpacity, FlatList } from "react-native";
import CatItem from "../components/CatItem";

const ChangeProductDesc = ({ navigation, route }) => {
  //   console.log(route.params.paramKey);
  const checkValue = require("../dataStorage/Inventory");

  function navigateNext(navigateTo, item) {
    navigation.navigate(navigateTo, { paramKey: item });
  }

  function getReqProduct() {
    return checkValue.product;
  }

  //   function filterProductBaseOnCat(prodData) {
  //     if (prodData.catId === route.params.paramKey) {
  //       return prodData;
  //     }
  //   }

  const renderCatItems = ({ item }) => {
    return (
      <CatItem
        name={item.itemName}
        image={item.itemImage}
        price={"$" + item.itemPrice}
        clickFunction={() => navigateNext("SetChangeProduct", item)}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        style={{ marginBottom: 10, flexGrow: 0 }}
        numColumns={2}
        // data={checkValue.product}
        data={getReqProduct()}
        renderItem={renderCatItems}
        keyExtractor={(item) => item.itemName}
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

export default ChangeProductDesc;
