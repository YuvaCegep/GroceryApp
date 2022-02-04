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

import { offerData } from "../dataStorage/Inventory";

const Dashboard = ({ navigation }) => {
  // This was created for the functionality of the search field
  function callChangeText(data) {
    console.log(data);
  }
  // This was created for making flat list as grid
  const numColumns = 2;
  let imageWidth = Dimensions.get("window").width / numColumns;

  const checkValue = require("../dataStorage/Inventory");

  // Navigation method with parameters
  function navigateToNextScreen(nextScreen, id) {
    navigation.navigate(nextScreen, { paramKey: id });
  }

  // Cell created for Horizontal scroll for fillers
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigateToNextScreen("CategoryList", item.id)}
      >
        <Image style={styles.bannerImage} source={item.image} />
      </TouchableOpacity>
    );
  };

  // Cells for Horizontal scrolls
  const renderHeading = ({ item }) => {
    return <Text style={styles.headingView}> {item.categoryHeading} </Text>;
  };

  // Cells for Category list icons
  const renderCatList = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigateToNextScreen("CategoryList", item.id)}
      >
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

  // This is the header view that inculcates other
  // views so as to single smooth scroll in flat list
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
          horizontal
          data={checkValue.offers}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
        <FlatList
          horizontal
          data={checkValue.headingList}
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
        data={checkValue.catList}
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
