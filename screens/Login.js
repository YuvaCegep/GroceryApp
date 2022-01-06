import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
// import { CheckBox } from "@react-native-community/checkbox";
import Checkbox from "expo-checkbox";
import { userName, passWord } from "../components/Storage";

const Login = ({ navigation }) => {
  const [isChecked, setChecked] = useState(false);

  const [userNameText, onUserNameChange] = useState("");
  const [passwordText, onPasswordChange] = useState("");

  // const goToSignup = () => {
  // };
  function navigateTo(navigateTo) {
    if (navigateTo === "Dashboard") {
      if (userNameText === "" || passwordText === "") {
        Alert.alert("Alert", "Please enter the Username and Password", [
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]);
      } else if (userName === userNameText && passWord === passwordText) {
        navigation.navigate(navigateTo);
      } else {
        Alert.alert("Alert", "Wrong username or password", [
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]);
      }
    } else {
      navigation.navigate(navigateTo);
    }
  }

  console.log(userNameText);
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.textHeading}>Login</Text>
      <TextInput
        placeholderTextColor={"#808080"}
        placeholder="Username"
        style={styles.userInput}
        onChangeText={onUserNameChange}
      />
      <TextInput
        placeholderTextColor={"#808080"}
        placeholder="Password"
        style={styles.userPassword}
        onChangeText={onPasswordChange}
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

      <TouchableOpacity
        onPress={() => navigateTo("Dashboard")}
        style={styles.button}
      >
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
        <TouchableOpacity onPress={() => navigateTo("Signup")}>
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
