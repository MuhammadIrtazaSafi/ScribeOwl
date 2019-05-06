import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from "./components/HomeScreen";
import ProfileScreen from "./components/ProfileScreen";
import Icon from 'react-native-vector-icons/MaterialIcons'
import NavRoot from "./components/NavRoot";
import LoginOrCreate from "./components/LoginOrCreate";

Icon.loadFont();

class App extends React.Component {



  render () {
    return <NavRoot/>;
  }

}

export default App;