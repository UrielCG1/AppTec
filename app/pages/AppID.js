import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const AppID = () => {
 const [name, setName] = useState('');

 return (
    <View style={styles.container}>
      
      <View style={styles.idCard}>
      <View style={styles.image_tec}>
          <Image style={styles.logoSize_Tec} source={require('./logo_tecnm.png')} />
        </View>
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
        <Image style={styles.qr_verify} source={require('./qr_verify.png')} />
      </View>
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FE9040',
 },
 idCard: {
    backgroundColor: '#01325F',
    borderRadius: width * 0.02,
    width: width * 0.8,
    height: height * 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#F7680C',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1.5,
    shadowRadius: width * 0.02,
    elevation: 1,
    padding: width * 0.05, // Añadir padding para dar espacio entre los elementos
 },
 
 labels: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height * 0.1,
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
    borderRadius: 10,
 },
 image_tec: {
  width: width * 0.5,
  height: height * 0.3,
  justifyContent: 'left',
  alignItems: 'center',
},
 blueBackground: {
    backgroundColor: '#01325F',
 },
 logoSize: {
    width: width * 0.4,
    height: height * 0.2,
    resizeMode: 'contain',
    borderRadius: 10,
 },
 logoSize_Tec: {
  width: width * 0.4,
  height: height * 0.2,
  resizeMode: 'contain',
},
 qr_verify: {
    width: width * 0.2,
    height: height * 0.1,
    resizeMode: 'contain',
    marginVertical: height * 0.02
 },
});

export default AppID;
