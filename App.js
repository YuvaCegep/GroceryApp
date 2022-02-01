import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import CategoryList from "./screens/CategoryList";
import Dashboard from "./screens/Dashboard";
import DescriptionProduct from "./screens/DescriptionProduct";

import CartList from "./screens/CartList";
import ShippingAddress from "./screens/ShippingAddress";
import ConfirmScreen from "./screens/ConfirmScreen";

import Admin from "./screens/Admin";
import AdminAddProduct from "./screens/AdminAddProduct";

import ChangeProductDesc from "./screens/ChangeProductDesc";
import SetChangeProduct from "./screens/SetChangeProduct";
import OrderList from "./screens/OrderList";

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
          options={{
            headerShown: true,
            title: "Products",
            headerStyle: { backgroundColor: "#24253C" },
            headerTitleStyle: { color: "#ffffff" },
            headerTintColor: "#ffffff",
          }}
          name="CategoryList"
          component={CategoryList}
        />

        <Stack.Screen
          options={{
            headerShown: true,
            title: "Grocery",
            headerStyle: { backgroundColor: "#24253C" },
            headerTitleStyle: { color: "#ffffff" },
            headerTintColor: "#ffffff",
          }}
          name="Dashboard"
          component={Dashboard}
        />

        <Stack.Screen
          options={{
            headerShown: false,
            title: "Product Description",
            headerStyle: { backgroundColor: "#24253C" },
            headerTitleStyle: { color: "#ffffff" },
            headerTintColor: "#ffffff",
          }}
          name="DescriptionProduct"
          component={DescriptionProduct}
        />

        <Stack.Screen
          options={{
            headerShown: true,
            title: "Cart List",
            headerStyle: { backgroundColor: "#24253C" },
            headerTitleStyle: { color: "#ffffff" },
            headerTintColor: "#ffffff",
          }}
          name="CartList"
          component={CartList}
        />

        <Stack.Screen
          options={{
            headerShown: true,
            title: "Shipping Address",
            headerStyle: { backgroundColor: "#24253C" },
            headerTitleStyle: { color: "#ffffff" },
            headerTintColor: "#ffffff",
          }}
          name="ShippingAddress"
          component={ShippingAddress}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="ConfirmScreen"
          component={ConfirmScreen}
        />

        <Stack.Screen
          options={{
            headerShown: true,
            title: "Admin Panel",
            headerStyle: { backgroundColor: "#24253C" },
            headerTitleStyle: { color: "#ffffff" },
            headerTintColor: "#ffffff",
          }}
          name="Admin"
          component={Admin}
        />

        <Stack.Screen
          options={{
            headerShown: true,
            title: "Admin Add Product",
            headerStyle: { backgroundColor: "#24253C" },
            headerTitleStyle: { color: "#ffffff" },
            headerTintColor: "#ffffff",
          }}
          name="AdminAddProduct"
          component={AdminAddProduct}
        />

        <Stack.Screen
          options={{
            headerShown: true,
            title: "Change Product",
            headerStyle: { backgroundColor: "#24253C" },
            headerTitleStyle: { color: "#ffffff" },
            headerTintColor: "#ffffff",
          }}
          name="ChangeProductDesc"
          component={ChangeProductDesc}
        />

        <Stack.Screen
          options={{
            headerShown: false,
            title: "Product Description",
            headerStyle: { backgroundColor: "#24253C" },
            headerTitleStyle: { color: "#ffffff" },
            headerTintColor: "#ffffff",
          }}
          name="SetChangeProduct"
          component={SetChangeProduct}
        />

        <Stack.Screen
          options={{
            headerShown: true,
            title: "Order List",
            headerStyle: { backgroundColor: "#24253C" },
            headerTitleStyle: { color: "#ffffff" },
            headerTintColor: "#ffffff",
          }}
          name="OrderList"
          component={OrderList}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
