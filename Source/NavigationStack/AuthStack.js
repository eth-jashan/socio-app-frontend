import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import StartupScreen from "../Screens/AuthStack/startup-screen";
import Home_screen from "../Screens/HomeStack/home-screen";
const AuthScreen = createStackNavigator();

const AuthStack = () => (
  <AuthScreen.Navigator
    initialRouteName={"startupScreen"}
    screenOptions={{ headerShown: false }}
  >
    <AuthScreen.Screen name={"startupScreen"} component={StartupScreen} />
  </AuthScreen.Navigator>
);

export default AuthStack;
