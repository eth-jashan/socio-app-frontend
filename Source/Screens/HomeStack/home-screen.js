
import React, { useEffect } from "react";

import { View, Text } from "react-native";
import { Avatar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

const HomeScreen = () => {
  const user = useSelector((state) => state.auth.user);
  console.log("User===>", user);
  return (
    <SafeAreaView>
      <Text>Welcome {user.name}</Text>
    </SafeAreaView>
  );
};


export default HomeScreen;

