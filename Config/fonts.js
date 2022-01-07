import * as Font from 'expo-font'

export const fontLoading = () => {
    return Font.loadAsync({
      bold: require("../assets/fonts/OpenSans-Bold.ttf"),
      light: require("../assets/fonts/OpenSans-Light.ttf"),
      medium: require("../assets/fonts/OpenSans-Medium.ttf"),
      regular: require("../assets/fonts/OpenSans-Regular.ttf"),
      semibold: require("../assets/fonts/OpenSans-SemiBold.ttf"),
    });
  };