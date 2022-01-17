// const Storage = () => {
// var userName = "";
// var passWord = "";
// // };

// function setUserName(username) {
//   userName = username;
// }
// function setPassword(password) {
//   passWord = password;
// }

import AsyncStorage from "@react-native-async-storage/async-storage";

const userName = async () => {
  try {
    // const value = await AsyncStorage.getItem("username");
    // if (value !== null) {
    //   // value previously stored
    //   console.log(value);
    //   return value;
    // }

    return await AsyncStorage.getItem("username");
  } catch (e) {
    console.log(e);
    // error reading value
  }
};

const passWord = async () => {
  try {
    const value = await AsyncStorage.getItem("password");
    if (value !== null) {
      // value previously stored
      return value;
    }
  } catch (e) {
    // error reading value
  }
};

const setUserName = async (value) => {
  try {
    await AsyncStorage.setItem("username", value);
    console.log("set data");
  } catch (e) {
    // saving error
    console.log(e);
  }
};

const setPassword = async (value) => {
  try {
    await AsyncStorage.setItem("password", value);
  } catch (e) {
    // saving error
  }
};

export { userName, passWord, setUserName, setPassword };
