import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  FlatList,
  Dimensions,
} from "react-native";
import Search from "../components/Search";
import { StatusBar } from "expo-status-bar";

// import DashboadData from "../groceryData/DashboadData";

const Dashboard = ({ navigation }) => {
  function callChangeText(data) {
    console.log(data);
  }

  const numColumns = 2;
  let imageWidth = Dimensions.get("window").width / numColumns;

  function navigateToNextScreen(nextScreen) {
    navigation.navigate(nextScreen);
  }

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigateToNextScreen("CategoryList")}>
        <Image style={styles.bannerImage} source={item.image} />
      </TouchableOpacity>
    );
  };

  const renderHeading = ({ item }) => {
    return <Text style={styles.headingView}> {item.categoryHeading} </Text>;
  };

  const renderCatList = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigateToNextScreen("CategoryList")}>
        {
          <View>
            <Image style={styles.catImage} source={item.image} />
            <Text
              style={{
                position: "absolute",
                color: "#000000",
                padding: 8,
                fontWeight: "bold",
              }}
            >
              {item.catName}
            </Text>
          </View>
        }
      </TouchableOpacity>
    );
  };
  const DATA = [
    {
      id: 1,
      name: "Offers One",
      image: require("../assets/banner_image_one.jpg"),
    },
    {
      id: 2,
      name: "Offers two",
      image: require("../assets/banner_image_two.jpg"),
    },
    {
      id: 3,
      name: "Offers three",
      image: require("../assets/banner_image_three.jpg"),
    },

    {
      id: 4,
      name: "Offers four",
      image: require("../assets/banner_image_one.jpg"),
    },

    {
      id: 5,
      name: "Offers five",
      image: require("../assets/banner_image_two.jpg"),
    },

    {
      id: 6,
      name: "Offers six",
      image: require("../assets/banner_image_three.jpg"),
    },

    {
      id: 7,
      name: "Offers seven",
      image: require("../assets/banner_image_one.jpg"),
    },

    {
      id: 8,
      name: "Offers eight",
      image: require("../assets/banner_image_two.jpg"),
    },

    {
      id: 9,
      name: "Offers nine",
      image: require("../assets/banner_image_three.jpg"),
    },

    {
      id: 10,
      name: "Offers ten",
      image: require("../assets/banner_image_one.jpg"),
    },
  ];

  const headingList = [
    {
      categoryHeading: "Category",
    },
    {
      categoryHeading: "Popular",
    },
    {
      categoryHeading: "Whats New",
    },
    {
      categoryHeading: "Recent Item",
    },
  ];

  const catList = [
    {
      catName: "Fruits and Vegetabeles",
      image: require("../assets/fruits_vegetables.jpg"),
    },
    {
      catName: "Beverages",
      image: require("../assets/beverages.png"),
    },
    {
      catName: "Dairy Products",
      image: require("../assets/dairy.jpg"),
    },
    {
      catName: "Grains",
      image: require("../assets/foodgrain.jpg"),
    },
    {
      catName: "Frozen Veg",
      image: require("../assets/frozen.jpg"),
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Search
        hint={"Search Products or Items"}
        changedText={(nextText) => callChangeText(nextText)}
        submitClick={() => console.log("clicked")}
      />

      <Text style={styles.headingView}>Best Value</Text>
      <FlatList
        style={{ flexGrow: 0 }}
        horizontal
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <FlatList
        style={{ marginBottom: 10, flexGrow: 0 }}
        horizontal
        data={headingList}
        renderItem={renderHeading}
        keyExtractor={(item) => item.categoryHeading}
      />

      <FlatList
        style={{ marginBottom: 10 }}
        numColumns={numColumns}
        data={catList}
        renderItem={renderCatList}
        keyExtractor={(item) => item.catName}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#24253C",
  },
  bannerImage: {
    height: 150,
    width: 270,
    margin: 10,
  },
  headingView: {
    marginLeft: 25,
    fontSize: 20,
    color: "#ffffff",
    marginTop: 10,
  },
  catImage: {
    margin: 3,
    justifyContent: "center",
    alignItems: "center",
    height: 150,
    width: Dimensions.get("window").width / 2,
  },
});

export default Dashboard;
