import React from "react";
import { StyleSheet, View, TouchableOpacity, FlatList } from "react-native";
import CatItem from "../components/CatItem";

const CategoryList = ({ navigation }) => {

    const catItem = [
        {
          itemName: "Apple",
          itemImage: require("../assets/apple.jpg"),
          itemPrice: "$25",
        },
        {
          itemName: "orange",
          itemImage: require("../assets/orange.jpg"),
          itemPrice: "$35",
        },
        {
          itemName: "Banana",
          itemImage: require("../assets/banana.jpg"),
          itemPrice: "$25",
        },
          {
            itemName: "Blueberry",
            itemImage: require("../assets/blueberry.jpg"),
            itemPrice: "$25",
          },
          {
            itemName: "Grapes",
            itemImage: require("../assets/grapes.jpg"),
            itemPrice: "$25",
          },
          {
            itemName: "Papaya",
            itemImage: require("../assets/papaya.jpg"),
            itemPrice: "$25",
          },
          {
            itemName: "Cherry",
            itemImage: require("../assets/cherry.jpg"),
            itemPrice: "$25",
          },
          {
            itemName: "Mango",
            itemImage: require("../assets/mango.jpg"),
            itemPrice: "$25",
          },
         ]; 
   function navigateNext(navigateTo) 
   {
   navigation.navigate(navigateTo);
     }
   
    const renderCatItems = ({ item }) => {
      return(
        <CatItem
         name={item.itemName}
         image={item.itemImage}
         price={item.itemPrice}
         clickFunction={() => navigateNext("DescriptionProduct")}
         />
      );
    };
  return (
    <View style={styles.container}>
      <FlatList
        style={{ marginBottom: 10, flexGrow: 0 }}
        numColumns={2}
        data={catItem}
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

export default CategoryList;
