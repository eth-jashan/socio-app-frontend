import React, { useCallback, useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Dimensions,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button } from "react-native-paper";
import { useSelector } from "react-redux";

import Startup from "../../Component/AuthStack/startup";
import constants from "../../Constants/styles";

const { width, height } = Dimensions.get("window");

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
  },
  {
    index: 3,
    lotiSource: "start.json",
    text: "Let us help you by tracking your progress",
  },
];

const StartupScreen = (props) => {


  const [visibleItem, setVisibleItem] = useState();
  const [index, setIndex] = useState(0);

  const handleScroll = (event) => {
    let xOffset = event.nativeEvent.contentOffset.x;
    const index = Math.floor(xOffset / 100);
    console.log(index);
    setIndex(index);
  };

  const renderItem = ({ item, index }) => {
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
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("homeFlow");
        }}
      >
        <View style={{ marginBottom: 40, justifyContent: "center" }}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Get Started</Text>
          </View>
        </View>
      </TouchableOpacity>

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
            backgroundColor: index === 0 ? "orange" : "white",
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

const styles = StyleSheet.create({
  container: {
    width: width,
    backgroundColor: constants.colors.startup,
  },
  heading: {
    fontSize: constants.textSize.heading,
    marginVertical: 15,
    paddingHorizontal: 15,
    fontFamily: "bold",
  },
  button: {
    borderRadius: 50,
    backgroundColor: "#f05c5c",
    padding: 10,
    alignItems: "center",
    width: width * 0.4,
    justifyContent: "center",
    marginLeft: 15,
  },
  buttonText: {
    color: "white",
    fontSize: constants.textSize.button,
    fontFamily: "semibold",
  },
  lotiContainer: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.65,
  },
});

export default StartupScreen;
