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
import { setUserName, setPassword } from "../components/Storage";

import AsyncStorage from "@react-native-async-storage/async-storage";

const Signup = ({ navigation }) => {
  const [userNameText, onUserNameChange] = useState("");
  const [lastNameText, onLastNameChange] = useState("");
  const [emailText, onEmailChange] = useState("");
  const [passwordText, onPasswordChange] = useState("");
  const [confirmPasswordText, onConfirmPasswordChange] = useState("");

  function navigateToLogin(withSignUp) {
    if (withSignUp) {
      if (
        emailText === "" ||
        passwordText === "" ||
        confirmPasswordText === ""
      ) {
        Alert.alert("Alert", "Please enter all the fields", [
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]);
      } else if (passwordText !== confirmPasswordText) {
        Alert.alert("Alert", "Please enter the same password", [
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]);
      } else {
        setUserName(emailText);
        setPassword(passwordText);
        // userName = emailText.value;
        // passWord = passwordText.value;

        Alert.alert("Alert", "UserName and Password is set", [
          { text: "OK", onPress: () => navigation.navigate("Login") },
        ]);
      }
    } else {
      navigation.navigate("Login");
    }
  }

  const [isChecked, setChecked] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.textHeading}>Sign Up</Text>
      <TextInput
        placeholderTextColor={"#808080"}
        placeholder="First Name"
        style={styles.userInput}
      />
      <TextInput
        placeholderTextColor={"#808080"}
        placeholder="Last Name"
        style={styles.userPassword}
      />

      <TextInput
        placeholderTextColor={"#808080"}
        placeholder="Email"
        style={styles.userPassword}
        onChangeText={onEmailChange}
      />

      <TextInput
        placeholderTextColor={"#808080"}
        placeholder="Password"
        style={styles.userPassword}
        onChangeText={onPasswordChange}
      />

      <TextInput
        placeholderTextColor={"#808080"}
        placeholder="Confirm password"
        style={styles.userPassword}
        onChangeText={onConfirmPasswordChange}
      />

      <View style={styles.checkBoxParent}>
        <View style={styles.checkBoxView}>
          <Checkbox
            style={{ marginRight: 12, marginTop: 3 }}
            value={isChecked}
            onValueChange={setChecked}
          />
          <Text style={{ color: "#FFFFFF" }}>
            I agree to terms and conditions
          </Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => navigateToLogin(true)}
        style={styles.button}
      >
        <Text style={{ color: "#FFFFFF" }}>Sign up</Text>
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
          Already have an account?
        </Text>
        <TouchableOpacity onPress={() => navigateToLogin(false)}>
          <Text style={{ color: "#DE3856" }}>Sign in</Text>
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

export default Signup;
