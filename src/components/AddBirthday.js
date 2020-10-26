import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput
} from 'react-native';



export default function AddBirthday() {
  return (
    <>
      <View style={styles.container}>
        <TextInput 
           style={styles.input}
           placeholder="Nombre"
           placeholderTextColor="#969696"
        />
        <TextInput 
           style={styles.input}
           placeholder="Apellidos"
           placeholderTextColor="#969696"
        />
      </View>
    </>
  )
}


const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input:{
    height: 50,
    width: '80%',
    color: "#fff",
    marginBottom: 25,
    backgroundColor: "#1e3040",
    paddingHorizontal: 20,
    borderRadius: 50,
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#1e3040"
  }
})