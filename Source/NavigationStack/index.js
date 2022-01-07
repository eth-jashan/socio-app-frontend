import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';

const NavigationStack = createStackNavigator()

const AppNavigator = () => (
  <NavigationContainer>
    <NavigationStack.Navigator screenOptions={{ headerShown: false }}>
      {/* <NavigationStack.Screen
        name={"authFlow"}
        component={AuthStack}
        screenOptions={{ headerShown: false }}
      /> */}
      <NavigationStack.Screen
        name={"homeFlow"}
        component={HomeStack}
        screenOptions={{ headerShown: false }}
      />
    </NavigationStack.Navigator>
  </NavigationContainer>
);

export default AppNavigator