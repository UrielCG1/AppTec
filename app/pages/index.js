import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const IndexPage = () => {
  const navigation = useNavigation(); // Obtener el objeto de navegación

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navbar}>
        <Button title="Back" onPress={() => navigation.goBack()} /> {/* Botón de retroceso */}
        <Text style={styles.title}>AppTec</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.welcome}>Welcome to AppTec!</Text>

        {/* Agregar el apartado de fechas y texto */}
        <View style={styles.dateContainer}>
          <Text style={styles.date}>Fecha de inicio: 01/04/2024</Text>
          <Text style={styles.date}>Fecha de fin: 30/04/2024</Text>
          <Text style={styles.evaluacionText}>Evaluación Docente</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button title="Credencial Digital" onPress={() => navigation.navigate('Credential')} />
          <Button title="Horario" onPress={() => navigation.navigate('Schedule')} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    backgroundColor: '#007AFF',
    flexDirection: 'row', // Alineación de elementos en fila
    alignItems: 'center', // Alinear elementos verticalmente al centro
    padding: 10,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10, // Margen izquierdo para separar el título del botón de retroceso
  },
  content: {
    flex: 1,
    padding: 20,
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  dateContainer: {
    marginBottom: 20,
    backgroundColor: '#F2F2F2',
    padding: 10,
    borderRadius: 10,
  },
  date: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
  },
  evaluacionText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF5733',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 'auto',
  },
});

export default IndexPage;
