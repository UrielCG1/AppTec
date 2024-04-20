import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const LoginPage = () => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

 const handleLogin = () => {
    // Aquí puedes llamar a tu controlador de autenticación
    // Por ejemplo: authenticationController.login(email, password)
    // Este es un ejemplo, asegúrate de implementar la lógica de autenticación adecuada
    console.log('Iniciando sesión con:', email, password);
 };

 return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <Button title="Iniciar Sesión" onPress={handleLogin} />
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
 },
 title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
 },
 input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
 },
});

export default LoginPage;
