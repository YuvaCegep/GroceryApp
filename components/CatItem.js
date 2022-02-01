import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";

import { setImage } from "../dataStorage/Inventory";
const CatItem = ({ name, image, price, clickFunction }) => {
  // function setImage() {
  //   if (typeof image === "object") {
  //     console.log("obj");
  //     return (
  //       <Image style={styles.imageStyle} source={{ uri: image.localUri }} />
  //     );
  //   } else {
  //     return <Image style={styles.imageStyle} source={image} />;
  //   }
  // }

  // const customImage = () => {
  //   return <View>{setImage()}</View>;
  // };

  return (
    <TouchableOpacity onPress={() => clickFunction()}>
      <View style={styles.container}>
        {typeof image === "object" ? (
          <Image style={styles.imageStyle} source={{ uri: image.localUri }} />
        ) : (
          <Image style={styles.imageStyle} source={image} />
        )}
        <View
          style={{
            backgroundColor: "#24253C",
          }}
        >
          <View style={{ flexDirection: "row", marginLeft: 8 }}>
            <View>
              <Text style={styles.textColor}>{name}</Text>
              <Text style={styles.textColor}>{price}</Text>
            </View>
            <View>
              {/* <Text style={styles.textColor}>{name}</Text>
              <Text style={styles.textColor}>{price}</Text> */}
            </View>
          </View>

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
    // height: 200,
    paddingBottom: 10,
  },
  imageStyle: {
    // width: Dimensions.get("window").width / 2,
    // height: 150,
    // marginRight: 5,

    height: 150,
    width: Dimensions.get("window").width / 2.2,
    borderRadius: 8,
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
