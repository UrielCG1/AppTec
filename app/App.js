import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IndexPage from './pages/index';
import AppCharge from './pages/AppCharge';
import AppLogin from './pages/AppLogin';
import AppID from './pages/AppID';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator initialRouteName="AppCharge">
        <Stack.Screen name="AppCharge" component={AppCharge} options={{ headerShown: false }} />
        <Stack.Screen name="AppLogin" component={AppLogin} options={{ headerShown: false }} />
        <Stack.Screen name="IndexPage" component={IndexPage} options={{ headerShown: false }}  />
        <Stack.Screen name="AppID" component={AppID} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;