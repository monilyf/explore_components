import React, { useState,useEffect } from 'react'
import { Text, View } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import SignIn from './Apps/screen/SignIn';
import Register from './Apps/screen/Register';
import Home from './Apps/screen/Home';
import SplashScreen from './Apps/screen/SplashScreen';

import Auth from './Apps/Authentication/Auth'
import Detailed from "./Apps/screen/Detailed";

const Stack = createStackNavigator();



const App = () => {
  const [Splash,setSplash]=useState(true);
  useEffect(() => {
    setTimeout(async()=>{
      setSplash(false);
    },4000);
  },[]);
    if (Splash){
      return (<SplashScreen/>)
    }
    
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        {/* <Stack.Screen name='SplashScreen' component={SplashScreen} options={{headerShown: false}}/> */}
        <Stack.Screen name='SignIn' component={SignIn} options={{headerShown: false}}/>
        <Stack.Screen name='Register' component={Register} options={{headerShown: false}}/>
        <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
        <Stack.Screen name='Detailed' component={Detailed} options={{headerShown: false}}/>
        <Stack.Screen name='Auth' component={Auth} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
