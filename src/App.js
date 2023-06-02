import React, {useEffect,useState} from 'react';
import SplashScreen from 'react-native-splash-screen'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Platform, SafeAreaView, StatusBar, View} from 'react-native';

import  Root from './navigator/root/index'

const Stack = createNativeStackNavigator();

function App() {
 
  useEffect(() => {
    SplashScreen.hide();
    // Platform.OS === 'android'
    //   ? StatusBar.setBackgroundColor('black')
    //   : null;
   
  }, []);
  return (

        <View style={{flex: 1}}>
         
          <SafeAreaView style={{}} />
          <NavigationContainer>
            <Root/>
          </NavigationContainer>
        </View>
   
  );
}

export default App;




