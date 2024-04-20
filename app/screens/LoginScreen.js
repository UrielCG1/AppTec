import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { login, register } from '../controllers/authenticationController';


const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      // Lógica de autenticación
      await login({ username, password });
      // Si la autenticación es exitosa, puedes navegar a otra pantalla
      // por ejemplo: navigation.navigate('Home');
    } catch (error) {
      setErrorMessage('Credenciales inválidas. Por favor, inténtalo de nuevo.');
    }
  };

  const handleRegister = async () => {
    try {
      // Lógica de registro
      await register({ username, password });
      // Si el registro es exitoso, puedes mostrar un mensaje de éxito
      // y posiblemente navegar a la pantalla de inicio de sesión
    } catch (error) {
      setErrorMessage('Error al registrar. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Nombre de Usuario"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Iniciar Sesión" onPress={handleLogin} />
      <Button title="Registrarse" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
  error: {
    color: 'red',
    marginBottom: 12,
  },
});

export default LoginScreen;
