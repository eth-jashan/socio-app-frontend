import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React,{useState} from 'react'



//screens
import StartupScreen from "./Source/Screens/AuthStack/startup-screen";
import { fontLoading } from './Config/fonts';
import { Provider } from 'react-redux';
import { persistor, store } from './Source/Redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import AppNavigator from './Source/NavigationStack';


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

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} >
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
