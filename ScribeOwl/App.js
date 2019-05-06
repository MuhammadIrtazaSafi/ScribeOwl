import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from "./components/HomeScreen";
import ProfileScreen from "./components/ProfileScreen";


const TabNavigator = createBottomTabNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
});

export default createAppContainer(TabNavigator);