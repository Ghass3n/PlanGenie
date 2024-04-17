import React, {useState} from "react";
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Navigator from './routes/homestack.js';


const getFonts = () => Font.loadAsync({
  FatFace: require('./assets/fonts/AbrilFatface-Regular.ttf'),
  DMsans: require('./assets/fonts/DMSans-Thin.ttf'),
  Montserrat: require('./assets/fonts/Montserrat-Italic-VariableFont_wght.ttf')
});

export default function App() {
    return(
      <Navigator />
    );
  } 
