import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View, StyleSheet, StatusBar} from 'react-native';
import firebase from "./src/utils/firebase";
import '@firebase/auth';
import Auth from "./src/components/Auth";


export default function App(){
  const [user, setUser] = useState(undefined);

  useEffect( () => {
    firebase.auth().onAuthStateChanged((response) => {
      setUser(response)
    })
  }, [])

  if(user === undefined) return null;

  return(
    <>
      <StatusBar backgroundColor={'#15212b'} barStyle="light-content"/>
      <SafeAreaView style={styles.background}>
        {user ? <Text>Estas Logeado</Text>: <Auth /> }
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#15212b",
    height: "100%"
  }
})