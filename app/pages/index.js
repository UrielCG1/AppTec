import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, Image, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const index = ({ navigation, route }) => {
  const { nombreUsuario } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('./logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>¡Bienvenido, {nombreUsuario}!</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.evaluationText}>Evaluación Docente</Text>
        <Text style={styles.hr}>------------------------------------</Text>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>Fecha de inicio: 01/04/2024</Text>
          <Text style={styles.date}>Fecha de fin: 30/04/2024</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            title="Ver Credencial Digital"
            onPress={() => navigation.navigate('AppID')}
            color="#007AFF"
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Ver Horario"
            onPress={() => navigation.navigate('Schedule')}
            color="#FE9040"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    fontSize: width * 0.06,
    fontWeight: 'bold',
    color: '#333',
    marginTop: height * 0.02,
  },
  content: {
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    padding: width * 0.04,
    borderRadius: width * 0.04,
    width: width * 0.9,
    marginBottom: height * 0.05,
  },
  hr: {
    fontSize: width * 0.05,
    color: '#333',
    marginBottom: height * 0.02,
  },
  dateContainer: {
    marginTop: height * 0.02,
  },
  date: {
    fontSize: width * 0.04,
    marginBottom: height * 0.01,
    color: '#666',
  },
  evaluationText: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    color: '#FE9040',
    marginBottom: height * 0.02,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.9,
  },
  button: {
    width: '45%',
    borderRadius: width * 0.03,
    height: height * 0.06,
    elevation: 8,
  },
});

export default index;
