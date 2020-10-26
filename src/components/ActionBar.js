import React, {useState} from 'react';
import { 
    Text, 
    View, 
    StyleSheet
} from 'react-native';
import firebase from "../utils/firebase";


export default function ActionBar(props){  
  const {showList, setShowList} = props;
  return(
    <View style={styles.viewFooter}>
        <View style={styles.viewClose}>
            <Text style={styles.text} onPress={()=>firebase.auth().signOut()}>
                Cerrar Sesión
            </Text>
        </View>
        <View style={styles.viewAdd}>
            <Text style={styles.text} onPress={() => setShowList(!showList)}>
                {showList ? 
                    "Nueva Fecha" :
                    "Cancelar Fecha"
                }
            </Text>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
   viewFooter:{
       position: 'absolute',
       bottom: 0,
       flexDirection: 'row',
       width: '100%',
       height: 50,
       justifyContent: 'space-between',
       alignItems: 'center',
       paddingHorizontal: 30,
       marginBottom: 20,
   },
   viewClose:{
       backgroundColor: '#B20000',
       borderRadius: 50,
       paddingVertical: 10,
       paddingHorizontal: 30,
   },
   text:{
       fontSize: 16,
       color: 'white',
       textAlign: 'center'
   },
   viewAdd:{
       backgroundColor: "#1ea1f2",
       borderRadius: 50,
       paddingVertical: 10,
       paddingHorizontal:30
   }
})