import React from 'react';
import { Dimensions, StyleSheet} from 'react-native';
import constants from '../../Constants/styles';

const {width,height} = Dimensions.get('screen');

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
    fontFamily:'semibold'
  },
  lotiContainer: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.65,
  },
});

export default styles