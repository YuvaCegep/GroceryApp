import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";

const CatItem = ({ name, image, price, clickFunction }) => {
  return (
    <TouchableOpacity onPress={() => clickFunction()}>
      <View style={styles.container}>
        <Image style={styles.imageStyle} source={image} />
        <View
          style={{
            backgroundColor: "#24253C",

            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.textColor}>{name}</Text>

          <Text style={styles.textColor}>{price}</Text>
          {/* <TouchableOpacity>
            <View style={styles.touchableStyle}>
              <Text> Add </Text>
            </View>
          </TouchableOpacity> */}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width / 2,
    height: 200,
  },
  imageStyle: {
    width: Dimensions.get("window").width / 2,
    height: 150,
    marginRight: 5,
  },
  touchableStyle: {
    borderRadius: 15,
    backgroundColor: "#ffff00",
  },
  textColor: {
    color: "#ffffff",
  },
});

export default CatItem;
