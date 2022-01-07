import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React,{useState} from 'react'



//screens
import StartupScreen from "./Source/Screens/AuthStack/StartupScreen";
import { fontLoading } from './Config/fonts';


export default function App() {

  const [fontLoad, setFontLoad] = useState(false);

  if (!fontLoad) {
    return (
      <AppLoading
        startAsync={fontLoading}
        onFinish={() => setFontLoad(true)}
        onError={(test) => {
          throw new Error(Text);
        }}
      />
    );
  }

  return <StartupScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
