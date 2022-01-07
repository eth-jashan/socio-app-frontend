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
    <View style={{ backgroundColor: constants.colors.startup, flex: 1 }}>
    </View>
  );
};


export default StartupScreen;
