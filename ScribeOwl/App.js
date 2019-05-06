import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from "./components/HomeScreen";
import ProfileScreen from "./components/ProfileScreen";
import Icon from 'react-native-vector-icons/MaterialIcons'

Icon.loadFont();


const TabNavigator = createBottomTabNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
});

export default createAppContainer(TabNavigator);