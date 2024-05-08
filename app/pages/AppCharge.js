import React, { useState, useEffect } from 'react';
import { View, Image, Text, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppLogin from './AppLogin';

const Stack = createStackNavigator();

const AppCharge = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000D32' }}>
        <Image
          source={require('./logo.png')} // Ajusta la ruta según la ubicación del archivo de imagen en tu proyecto
          style={{ width: 300, height: 300 }} // Ajusta el estilo según sea necesario
        />
        <ActivityIndicator size="large" color="#ffffff" style={{ position: 'absolute', top: '80%' }} />
      </View>
    );
  } else {
    return <AppLogin />; // Return IndexPage after 2 seconds
  }
};

export default AppCharge;
