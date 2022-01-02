import React from "react";
import {StyleSheet, Text, View, TouchableOpacity, Image, Dimensions} from "react-native";

const CatItem = ({ name, image, price }) => {
    return (
        <View style={styles.container}>
          <Image
            style={styles.imageStyle}
            source={image}
          />
          <View style={{ backgroundColor: "#ffffff" }}>
            <Text>{name}</Text>
    
            <Text>{price}</Text>
            <TouchableOpacity>
              <View style={styles.touchableStyle}>
                <Text> Add </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      );
    };

    const styles = StyleSheet.create({
        container: {
          width: Dimensions.get("window").width / 2,
          height: 200,
        },
        imageStyle: {
          height: 130,
          marginRight: 5,
        },
        touchableStyle: {
          borderRadius: 15,
          backgroundColor: "#ffff00",
        },
      });
      
      export default CatItem;
      