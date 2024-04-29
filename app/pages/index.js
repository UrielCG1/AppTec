import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, Image, Dimensions } from 'react-native';
import { users } from '../controllers/authenticationController'; // Importa el controlador de autenticación


const { width, height } = Dimensions.get('window');
const IndexPage = ({ navigation, route }) => {
  const { nombreUsuario } = route.params;


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('./logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Bienvenido {nombreUsuario}</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>Fecha de inicio: 01/04/2024</Text>
          <Text style={styles.date}>Fecha de fin: 30/04/2024</Text>
          <Text style={styles.evaluacionText}>Evaluación Docente</Text>
        </View>
      </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Credencial Digital"
            onPress={() => navigation.navigate('AppID')}
            color="#007AFF"
          />
          <View style={styles.buttonSeparator} />
          <Button
            title="Horario"
            onPress={() => navigation.navigate('Schedule')}
            color="#FE9040"
          />
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000D32',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: height * 0.05,
  },
  logo: {
    width: width * 0.5,
    height: width * 0.5,
  },
  title: {
    fontSize: width * 0.07,
    fontWeight: 'bold',
    color: '#FFF',
    marginTop: height * 0.02,
  },
  content: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: width * 0.04,
    borderRadius: width * 0.04,
    width: width * 0.9,
  },
  dateContainer: {
    marginBottom: height * 0.02,
  },
  date: {
    fontSize: width * 0.05,
    marginBottom: height * 0.01,
    color: '#333',
  },
  evaluacionText: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    color: '#FE9040',
  },
  buttonContainer: {
    marginTop: height * 0.07,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonSeparator: {
    width: width * 0.09,
  },
});

export default IndexPage;
