import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeStack/home-screen";
import BottomStack from "./BottomStack";


const MainScreen = createStackNavigator();

const HomeStack = () => (
  <MainScreen.Navigator
    initialRouteName={"bottomTab"}
    screenOptions={{ headerShown: false }}
  >
    <MainScreen.Screen name={"bottomTab"} component={BottomStack} />
    <MainScreen.Screen name={"homeScreen"} component={HomeScreen} />
  </MainScreen.Navigator>
);

export default HomeStack;
