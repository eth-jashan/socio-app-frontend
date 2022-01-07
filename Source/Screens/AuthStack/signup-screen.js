import React, { useCallback, useState } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Dimensions,
} from "react-native";
import { Button } from "react-native-paper";

import Startup from "../../Component/AuthStack/startup";
import constants from "../../Constants/styles";
import StartupStyles from '../../Styles/AuthStack/StartupStyles'

const{width,height} = Dimensions.get('window')


const StartupScreen = () => {

  return (
    <SafeAreaView style={{ backgroundColor: constants.colors.startup, flex: 1 }}>
    </SafeAreaView>
  );
};


export default StartupScreen;
