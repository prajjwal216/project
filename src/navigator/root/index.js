import React, {useEffect, useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Platform, SafeAreaView, StatusBar, View} from 'react-native';

import AuthStackNavigator from '../authstack';

import {PersistGate} from 'redux-persist/integration/react';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

const Root = () => {
  return (
    <Stack.Navigator options={{headerShown: false}}>
      <Stack.Screen
        name="AuthStack"
        component={AuthStackNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Root;
