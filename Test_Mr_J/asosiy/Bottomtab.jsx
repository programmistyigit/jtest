import { View, Text } from 'react-native'
import { NavigationContainer , DarkTheme,DefaultTheme} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {AntDesign,FontAwesome} from "@expo/vector-icons"




const Tab=createBottomTabNavigator()

import React, { useEffect, useState } from 'react'
import Home from '../components/Home';
import Search from '../components/Search';


const Bottomtab = () => {
  
  return (
    <NavigationContainer theme={DarkTheme}>
      <Tab.Navigator>
        <Tab.Screen name='Home' options={{tabBarIcon(p){return <AntDesign name='home' {...p}/>}}} component={Home}/>
        <Tab.Screen name='Sozlamalar' options={{tabBarIcon(p){return <AntDesign name='setting' {...p}/>}}} component={Search}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Bottomtab