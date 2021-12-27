import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
// import { CheckBox } from "@react-native-community/checkbox";
import Checkbox from "expo-checkbox";

const Login = ({ navigation }) => {
  const [isChecked, setChecked] = useState(false);

  // const goToSignup = () => {
  // };
  function navigateToSignup() {
    navigation.navigate("Signup");
  }

  console.log(navigation);
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.textHeading}>Login</Text>
      <TextInput
        placeholderTextColor={"#808080"}
        placeholder="userName"
        style={styles.userInput}
      />
      <TextInput
        placeholderTextColor={"#808080"}
        placeholder="password"
        style={styles.userPassword}
      />
      <View style={styles.checkBoxParent}>
        <View style={styles.checkBoxView}>
          <Checkbox
            style={{ marginRight: 12, marginTop: 3 }}
            value={isChecked}
            onValueChange={setChecked}
          />
          <Text style={{ color: "#FFFFFF" }}>Remember me</Text>
        </View>
        <Text style={{ color: "#FFFFFF" }}>Forgot Password</Text>
      </View>

      <TouchableOpacity onPress={navigateToSignup} style={styles.button}>
        <Text style={{ color: "#FFFFFF" }}>Login</Text>
      </TouchableOpacity>
      <View
        style={{
          height: 60,
          marginTop: 45,
          position: "absolute",
          bottom: 0,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Text style={{ color: "#FFFFFF", marginRight: 15 }}>
          Don't have an account?
        </Text>
        <TouchableOpacity onPress={navigateToSignup}>
          <Text style={{ color: "#DE3856" }}>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#24253C",
    paddingTop: 25,
  },
  textHeading: {
    color: "#FFFFFF",
    fontSize: 35,
    marginLeft: 25,
    marginTop: 60,
  },
  userInput: {
    marginTop: 45,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "#DE3856",
    color: "#FFFFFF",
    marginLeft: 25,
    marginRight: 25,
  },
  userPassword: {
    marginTop: 15,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "#DE3856",
    color: "#FFFFFF",
    marginLeft: 25,
    marginRight: 25,
  },
  btnStyle: {
    marginLeft: 25,
    marginRight: 25,
  },
  button: {
    marginTop: 35,

    alignItems: "center",
    backgroundColor: "#DE3856",
    padding: 10,
    marginLeft: 25,
    marginRight: 25,
  },
  checkBoxView: {
    flexDirection: "row",
  },
  checkBoxParent: {
    marginLeft: 25,
    marginRight: 25,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Login;
