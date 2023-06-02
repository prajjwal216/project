import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../screens/auth/login';
import OtpVerify from '../../screens/auth/otpVerify';
import ForgotPassword from '../../screens/auth/forgotPassword';
import Register from '../../screens/auth/register';
import Home from '../../screens/dashboard/dashboard';
import { useEffect, useState } from 'react';


const AuthStack = createNativeStackNavigator();
const AuthStackNavigator = () => {
  
return  (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="OtpVerify"
        component={OtpVerify}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
      name="Login"
      component={Login}
      options={{headerShown: false}}
    />
    </AuthStack.Navigator>

 
  )
};

export default AuthStackNavigator;