import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TextInput } from 'react-native';

const AppID = () => {
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.logo} source={require('./logo_tecnm.png')} />
        {/* Modificar el logo con el fondo azul */}
        <View style={[styles.image, styles.blueBackground]}>
          <Image source={require('./logo.png')} />
        </View>
        {/* Fin de la modificación del logo */}
        <Text style={styles.label}>Nombre:</Text>
        <TextInput
          style={styles.textInput}
          value={name}
          onChangeText={text => setName(text)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginVertical: 5,
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 10,
    // Estilo para el fondo azul
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  blueBackground: {
    backgroundColor: 'blue',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 200,
    marginVertical: 5,
    textAlign: 'center',
  },
  person: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

export default AppID;
