// pages/login.js
import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Animated } from 'react-native';
import { loginUser } from '../controllers/authenticationController';
import styles from '../public/style';
import IndexPage from './index';


const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [authenticated, setAuthenticated] = useState(false); // Estado para controlar la autenticación

  const opacity = new Animated.Value(1);

  const handleSubmit = () => {
    const success = loginUser(email, password);
    if (success) {
      // Handle successful authentication
      console.log('Authenticated successfully');
      setAuthenticated(true); // Establece el estado de autenticación como verdadero

      // Navigate to IndexPage
      // Esto depende de cómo estés manejando la navegación. Si estás utilizando React Navigation, puedes usar props.navigation.navigate('IndexPage') aquí.
    } else {
      // Handle authentication failure
      setErrorMessage('Invalid email or password');
    }
  };

  if (authenticated) {
    return <IndexPage />;
  }

  return (
    <Animated.View style={{ opacity }}>
      <View style={styles.container}>
        <Text style={styles.title}>AppTec</Text>
        {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

export default LoginScreen;
