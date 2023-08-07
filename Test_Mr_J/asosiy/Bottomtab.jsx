import { View, Text } from 'react-native'
import { NavigationContainer , DarkTheme} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {AntDesign} from "@expo/vector-icons"

const Tab=createBottomTabNavigator()

import React from 'react'
import Home from '../components/Home';
import Search from '../components/Search';

const Bottomtab = () => {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Tab.Navigator>
        <Tab.Screen name='Home' options={{tabBarIcon(p){return <AntDesign name='home' {...p}/>}}} component={Home}/>
        <Tab.Screen name='Test qidirish' options={{tabBarIcon(p){return <AntDesign name='search1' {...p}/>}}} component={Search}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Bottomtab