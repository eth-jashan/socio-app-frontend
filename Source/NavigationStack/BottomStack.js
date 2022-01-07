import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeScreen from '../Screens/HomeStack/home-screen';
import ProfileScreen from '../Screens/HomeStack/profile-screen';
import SearchScreen from '../Screens/HomeStack/search-screen';
import {
  Entypo,
  AntDesign,
  FontAwesome,
} from "@expo/vector-icons";
import { Avatar } from 'react-native-paper';

const Tab = createMaterialBottomTabNavigator();

const demoProfile = 'https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture.jpg'


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
              <Avatar.Image size={24} source={{uri:demoProfile}} />
            ),
          }}
        />
      </Tab.Navigator>
    );
}

export default BottomStack;