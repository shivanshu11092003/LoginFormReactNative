/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';



//Screens
import SignUp from './SignUpScreen';
import Successful from './Successful';
import FailedScreen from './FailedScreen';
import LoginPage from './LoginPage';

export type RootsStackParamList={
  LoginPage: undefined;
  SignUp: undefined;
  Successful:undefined;
  Failed:undefined;
  SplashScreen:undefined
  
}

import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './SplashScreen';
const stack = createNativeStackNavigator<RootsStackParamList>()


function App(){
  return(
    <NavigationContainer>
    <stack.Navigator initialRouteName='SplashScreen'>
      <stack.Screen 
      name='SplashScreen' 
       component={SplashScreen}
       options={{headerShown:false}}/>
      <stack.Screen
       name='LoginPage'
       component={LoginPage}
       options={{headerShown:false
       
       }}/>
       <stack.Screen
       name='SignUp'
       component={SignUp}
       options={{
        headerShown:false
        
       }}/>
       <stack.Screen
       name='Successful'
       component={Successful}
       options={{
        headerShown:false
        
       }}/>
       
       

     
    </stack.Navigator>
  </NavigationContainer>
  );

  
  
    
}

export default App;
