import React, { useState } from 'react'
import {View,Text,Image, Dimensions} from 'react-native'
import LottieView from "lottie-react-native";


//styles
import StartupStyles from './Styles/StartupStyles';

const Startup = (props) => {
    
    console.log(props.data.lotiSource);
    return (
      <View style={StartupStyles.container}>
        <View style={StartupStyles.lotiContainer}>
          <LottieView
            source={
              props.data.index === 1
                ? require("../../../assets/healthy.json")
                : props.data.index === 2
                ? require("../../../assets/burn.json")
                : require("../../../assets/start.json")
            }
            loop={true}
            autoPlay={true}
            speed={1}
          />
        </View>
        <Text style={{ ...StartupStyles.heading, color: "white" }}>
          {props.data.text}
        </Text>
        <View style={StartupStyles.button}>
          <Text style={StartupStyles.buttonText}>Get Started</Text>
        </View>
      </View>
    );
};

export default Startup;