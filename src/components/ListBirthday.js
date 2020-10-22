import React, {useState} from 'react';
import { 
    Text, 
    View, 
    StyleSheet
} from 'react-native';
import ActionBar from "./ActionBar";



export default function ListBirthday(){  
  return(
    <View style={styles.container}>
      <Text>Hola</Text>
      <ActionBar />
    </View>
  )
}


const styles = StyleSheet.create({
   container:{
       height:'100%',
       alignItems: 'center'
   }
})