import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';

const AppLogin = () => {
  const [controlNumber, setControlNumber] = useState('');
  const [nip, setNip] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    // Realizar la validación aquí
    if (controlNumber === '19141139' && nip === '123') {
      // Si los datos son correctos, navegar a otra interfaz
      // Aquí puedes usar alguna navegación de React Navigation o cualquier otra librería de navegación
      console.log('Login exitoso');
    } else {
      // Si los datos son incorrectos, mostrar un mensaje de error
      setErrorMessage('Verifica tus credenciales');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('./logo.png')} // Ajusta la ruta según la ubicación del archivo de imagen en tu proyecto
          style={{ width: 300, height: 300 }} // Ajusta el estilo según sea necesario
          resizeMode="contain" // Modo de redimensionamiento de la imagen
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, { color: 'gray' }, { textAlign: 'center' }]}
          placeholder="No. Control"
          value={controlNumber}
          onChangeText={text => setControlNumber(text)}
        />
        <TextInput
          style={[styles.input, { color: 'gray' }, { textAlign: 'center' }]}
          placeholder="NIP"
          secureTextEntry={true}
          value={nip}
          onChangeText={text => setNip(text)}
        />
      </View>
      {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={[styles.buttonText, { color: 'black' }]}>ENTRAR</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#010E34',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    backgroundColor: '#010E34',
  },
  inputContainer: {
    backgroundColor: '#010E34',
    padding: 20,
    borderRadius: 5,
    marginBottom: 20,
    width: '80%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: '#FE9040',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
  },
  errorMessage: {
    color: 'red',
    marginBottom: 10,
  },
});

export default AppLogin;

