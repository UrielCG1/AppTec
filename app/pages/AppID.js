import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TextInput, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const AppID = () => {
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.idCard}>
        <View style={styles.content}>
          <Image style={styles.logo} source={require('./logo_tecnm.png')} />
          <View style={[styles.image, styles.blueBackground]}>
            <Image style={styles.logoSize} source={require('./logo_id.png')} />
          </View>
          <View style={styles.labels}>
            <Text style={[styles.label, { color: 'white' }]}>Nombre</Text>
            <Text style={styles.emptyLabel}></Text>
            <Text style={[styles.label, { color: 'white' }]}>Carrera</Text>
            <Text style={styles.emptyLabel}></Text>
            <Text style={[styles.label, { color: 'white' }]}>No. Control</Text>
            <Text style={styles.emptyLabel}></Text>
          </View>
        </View>
        <View>
          <Image style={styles.qr_verify} source={require('./logo_id.png')} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width * 0.8,
    height: height * 0.6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FE9040', // Set background color to white
  },
  idCard: {
    backgroundColor: '#01325F', // Set ID card
    borderRadius: width * 0.02,
    width: width * 0.7,
    height: height * 0.7,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#F7680C',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1.5,
    shadowRadius: width * 0.02,
    elevation: 1,
  },
  personal: {
    backgroundColor: '#01325F', // Set ID card
    borderRadius: width * 0.02,
    width: width * 0.04,
    height: height * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#F7680C',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1.5,
    shadowRadius: width * 0.02,
    elevation: 1,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: width * 0.7,
    height: height * 0.2,
    marginBottom: height * 0.02,
  },
  labels: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: height * 0.02,
  },
  label: {
    fontSize: width * 0.04,
    marginVertical: height * 0.005,
  },
  emptyLabel: {
    height: height * 0.02,
    borderColor: 'gray',
    borderWidth: 1,
    width: width * 0.4,
    marginVertical: height * 0.002,
    textAlign: 'center',
  },
  image: {
    width: width * 0.2,
    height: height * 0.1,
    marginVertical: height * 0.01,
    backgroundColor: '#01325F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  blueBackground: {
    backgroundColor: '#01325F',
  },
  logoSize: {
    width: width * 0.2,
    height: height * 0.1,
    resizeMode: 'contain', // This will maintain the aspect ratio of the image
  },
  qr_verify: {
    width: width * 0.2,
    height: height * 0.1,
    resizeMode: 'contain', // This will maintain the aspect ratio of the image
    marginVertical: height * 0.02
  },
  textInput: {
    height: height * 0.02,
    borderColor: 'gray',
    borderWidth: 1,
    width: width * 0.4,
    marginVertical: height * 0.002,
    textAlign: 'center',
  },
  person: {
    position: 'absolute',
    bottom: height * 0.02,
    right: width * 0.02,
    width: width * 0.1,
    height: height * 0.1,
    borderRadius: width * 0.05,
  },
});

export default AppID;