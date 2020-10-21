import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View, StyleSheet, StatusBar, Button} from 'react-native';
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
        {user ? <Logout />: <Auth /> }
      </SafeAreaView>
    </>
  )
}

const Logout = () =>{
  const logout = () => {
    firebase.auth().signOut();
  }
  return (
    <View>
      <Text>Estas logeado</Text>
      <Button title="Cerrar Sesión" onPress={logout}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#15212b",
    height: "100%"
  }
})