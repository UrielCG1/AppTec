// pages/index.js
import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';

const IndexPage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.title}>AppTec</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.welcome}>Welcome to AppTec!</Text>
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
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 'auto',
  },
});

export default IndexPage;
