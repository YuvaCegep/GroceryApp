import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  Text,
  TextInput,
} from "react-native";

import * as ImagePicker from "expo-image-picker";

const AdminAddProduct = () => {
  // require("../dataStorage/Inventory").product[0].itemName = "Appple";

  // Parameters required for adding the product
  const [selectedImage, setSelectedImage] = useState(
    "../assets/add-to-basket.png"
  );
  const [productName, onProductNameChange] = useState("");

  const [catID, onCatChange] = useState("");

  const [price, onPriceChange] = useState("");

  // Save the data in the list
  // for inventory
  function saveData() {
    const value = {
      catId: parseInt(catID),
      itemName: productName,
      itemImage: selectedImage,
      itemPrice: parseInt(price),
    };

    require("../dataStorage/Inventory").product.push(value);

    console.log(require("../dataStorage/Inventory").product);
  }

  // To open the Gallery of the mobile to add
  //  the media
  let openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    setSelectedImage({ localUri: pickerResult.uri });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={{ width: 100, height: 100, alignSelf: "center" }}
          source={{ uri: selectedImage.localUri }}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={openImagePickerAsync}>
        <Text style={styles.textStyle}>Change Product Pricing</Text>
      </TouchableOpacity>

      <TextInput
        placeholderTextColor={"#808080"}
        placeholder="Product Name"
        style={styles.userInput}
        onChangeText={onProductNameChange}
      />

      <TextInput
        placeholderTextColor={"#808080"}
        placeholder="Category Id"
        style={styles.userInput}
        onChangeText={onCatChange}
      />

      <TextInput
        placeholderTextColor={"#808080"}
        placeholder="Price"
        style={styles.userInput}
        onChangeText={onPriceChange}
      />

      <TouchableOpacity
        onPress={() => saveData()}
        style={{
          backgroundColor: "#DE3856",
          marginTop: 15,
          paddingTop: 15,
          paddingBottom: 25,
        }}
      >
        <Text style={{ color: "#ffffff", alignSelf: "center" }}>
          Add Product
        </Text>
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
  },
  userInput: {
    marginTop: 20,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "#DE3856",
    color: "#FFFFFF",
    marginLeft: 25,
    marginRight: 25,
  },
});

export default AdminAddProduct;
