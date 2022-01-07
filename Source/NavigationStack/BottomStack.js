import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeScreen from '../Screens/HomeStack/home-screen';
import ProfileScreen from '../Screens/HomeStack/profile-screen';
import SearchScreen from '../Screens/HomeStack/search-screen';
import {
  Entypo,
  Feather,
  MaterialIcons,
  Ionicons,
  FontAwesome5,
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome,
} from "@expo/vector-icons";

const Tab = createMaterialBottomTabNavigator();


const BottomStack = () => {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        activeColor={"#cccccc"}
        barStyle={{
          backgroundColor: "#000000",
          borderTopWidth: 0.3,
        }}
        shifting={true}
        screenOptions={{ headerShown: false }}
      >
        <Tab.Screen
          name={"homeScreen"}
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <Entypo name="home" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name={"searchScreen"}
          component={SearchScreen}
          options={{
            tabBarLabel: "Search",
            tabBarIcon: ({ color }) => (
              <AntDesign name="search1" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name={"profileScreen"}
          component={ProfileScreen}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color }) => (
              <FontAwesome name="user" size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    );
}

export default BottomStack;