import React, {useEffect, useState} from 'react';
import {
  SafeAreaView, 
  StyleSheet, 
  StatusBar,
  LogBox,
} from 'react-native';
import {decode, encode} from "base-64"
import firebase from "./src/utils/firebase";
import '@firebase/auth';
import Auth from "./src/components/Auth";
import ListBirthday from "./src/components/ListBirthday";
//import '@react-native-firebase/auth';

if(!global.btoa) global.btoa = encode;
if(!global.atob) global.atob = decode;

LogBox.ignoreLogs(["Setting a timer","DatePickerAndroid has been merged"]);

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
        {user ? <ListBirthday user={user}/>: <Auth /> }
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