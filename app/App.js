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
      <Stack.Navigator initialRouteName="AppID">
        <Stack.Screen name="AppCharge" component={AppCharge} options={{ headerShown: false }} />
        <Stack.Screen name="AppLogin" component={AppLogin} />
        <Stack.Screen name="IndexPage" component={IndexPage} options={{ title: 'Index Page' }} />
        <Stack.Screen name="AppID" component={AppID} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;