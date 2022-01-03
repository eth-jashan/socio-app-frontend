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

import Startup from "../../Components/AuthStack/Startup";
import constants from "../../Constants/constants";

const{width,height} = Dimensions.get('window')

const startupData = [
  {
    index: 1,
    lotiSource: "healthy.json",
    text: "Share your healthy lifestyle with \nothers",
    backgroundColor: "#2b3187",
    textColor: "white",
    buttonColor: "#f05c5a",
  },
  {
    index: 2,
    lotiSource: "burn.json",
    text: "And if you don't have one. Why not let others help you.",
    backgroundColor: "black",
    textColor: "white",
    buttonColor: "#f05c5c",
  },
  {
    index: 3,
    lotiSource: "start.json",
    text: "Let us help you by tracking your progress",
    backgroundColor: "#2b3187",
    textColor: "white",
    buttonColor: "#f05c5c",
  },
];

const StartupScreen = () => {

  


  const [visibleItem,setVisibleItem] = useState();
  const [index,setIndex] = useState(0);

  const handleScroll = (event) => {
  let xOffset = event.nativeEvent.contentOffset.x
  const index = (Math.floor( xOffset/100))
  console.log(index)
  setIndex(index)
}


  const renderItem = ({ item,index }) => {
      return (
        <View>
          <Startup data={item} />
        </View>
      );
  };

  return (
    <View style={{ backgroundColor: constants.colors.startup, flex: 1 }}>
      <FlatList
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        onScroll={handleScroll}
        snapToInterval={width}
        data={startupData}
        horizontal={true}
        renderItem={renderItem}
        keyExtractor={(item) => item.index}
        showsHorizontalScrollIndicator={false}
      />
      <View
        style={{
          alignItems: "center",
          marginVertical: 15,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            backgroundColor: index ===  0 ? "orange" : "white",
            borderRadius: 100,
            height: 5,
            width: 5,
            marginHorizontal: 10,
          }}
        ></View>
        <View
          style={{
            backgroundColor: index === 3 ? "orange" : "white",
            borderRadius: 100,
            height: 5,
            width: 5,
            marginHorizontal: 10,
          }}
        ></View>
        <View
          style={{
            backgroundColor: index === 7 ? "orange" : "white",
            borderRadius: 100,
            height: 5,
            width: 5,
            marginHorizontal: 10,
          }}
        ></View>
      </View>
    </View>
  );
};


export default StartupScreen;