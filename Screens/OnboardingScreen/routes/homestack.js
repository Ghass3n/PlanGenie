import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TransitionPresets } from '@react-navigation/stack';
import Screen1 from "../screens/screen1";
import Screen2 from "../screens/screen2";
import Screen3 from "../screens/screen3";

const Stack=createStackNavigator();
 export default function Homestack(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Screen1"
        screenOptions={{
          gestureEnabled: true,
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}>
                <Stack.Screen name="Screen1" component={Screen1} options={{headerShown:false}}/>
                <Stack.Screen name="Screen2" component={Screen2} options={{headerShown:false}}/>
                <Stack.Screen name="Screen3" component={Screen3} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
 }