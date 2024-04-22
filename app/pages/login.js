import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Animated } from 'react-native';
import { loginUser } from '../controllers/authenticationController';
import styles from '../public/style';
import IndexPage from './index';

const LoginScreen = () => {
  const [numDeControl, setNumDeControl] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  const opacity = new Animated.Value(1);

  const handleSubmit = () => {
    const { success, message } = loginUser(numDeControl, password);
    if (success) {
      setAuthenticated(true);
    } else {
      setErrorMessage(message);
    }
  };

  if (authenticated) {
    return <IndexPage />;
  }

  return (
    <Animated.View style={{ opacity }}>
      <View style={styles.container}>
        <Text style={styles.title}>AppTec</Text>
        {errorMessage? <Text style={styles.error}>{errorMessage}</Text> : null}
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.tituloLogin}>Núm. Control:</Text>
          <TextInput
            style={styles.input}
            placeholder="Número de control"
            keyboardType="numeric"
            autoCapitalize="none"
            value={numDeControl}
            onChangeText={setNumDeControl}
          />
          <Text style={styles.tituloLogin}>NIP:</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingresa tu NIP"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Iniciar Sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Animated.View>
  );
};

export default LoginScreen;