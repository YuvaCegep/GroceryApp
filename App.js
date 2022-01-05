import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import CategoryList from "./screens/CategoryList";
import Dashboard from "./screens/Dashboard";
import DescriptionProduct from "./screens/DescriptionProduct";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Signup"
          component={Signup}
        />
        <Stack.Screen
          options={{ headerShown: true, name: "Category" }}
          name="CategoryList"
          component={CategoryList}
        />

        <Stack.Screen
          options={{ headerShown: true, name: "Grocery" }}
          name="Dashboard"
          component={Dashboard}
        />

        <Stack.Screen
          options={{ headerShown: true, name: "Product Description" }}
          name="DescriptionProduct"
          component={DescriptionProduct}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
