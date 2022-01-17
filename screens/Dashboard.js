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
          <View
            style={{
              width: Dimensions.get("window").width / 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image style={styles.catImage} source={item.image} />
            <Text
              style={{
                // position: "absolute",
                color: "#ffffff",
                marginTop: 2,
                marginBottom: 10,
                marginLeft: 8,
                fontWeight: "normal",
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

  const getHeader = () => {
    return (
      <View>
        <Search
          hint={"Search Products or Items"}
          changedText={(nextText) => callChangeText(nextText)}
          submitClick={() => console.log("clicked")}
        />

        <Text style={styles.headingView}>Best Value</Text>
        <FlatList
          // style={{ flexGrow: 0 }}

          horizontal
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
        <FlatList
          horizontal
          data={headingList}
          renderItem={renderHeading}
          keyExtractor={(item) => item.categoryHeading}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView style={styles.container}> */}
      <StatusBar style="light" />

      <FlatList
        style={{ marginBottom: 10 }}
        numColumns={numColumns}
        data={catList}
        renderItem={renderCatList}
        keyExtractor={(item) => item.catName}
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={getHeader}
      />
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#24253C",
  },
  bannerImage: {
    height: 150,
    width: 270,
    margin: 10,
    borderRadius: 8,
  },
  headingView: {
    marginLeft: 25,
    fontSize: 20,
    color: "#ffffff",
    marginTop: 5,
    marginBottom: 5,
  },
  catImage: {
    height: 150,
    width: Dimensions.get("window").width / 2.2,
    borderRadius: 8,
  },
});

export default Dashboard;
