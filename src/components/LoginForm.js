import React, {useState} from "react";
import {StyleSheet, 
    View,
    Text, 
    TouchableOpacity,
    TextInput,
} from "react-native";
import {validateEmail} from "../utils/validations";
import firebase from "../utils/firebase";

export default function LoginForm(props){
    const {changeForm} = props;
    const [formdata, setFormData] =useState(defaultValue())

    const login = () => {
        console.log("iniciando sesión");
        console.log(formdata)
    }

    const onChange = (e, type) => {
        // console.log('data', e.nativeEvent.text);
        // console.log('type',type)
        setFormData({
            ...formdata,
            [type]: e.nativeEvent.text
        });
    }

    return(
        <>
            <TextInput
                style={styles.input}
                placeholder="Correo electrónico"
                placeholderTextColor="#969696"
                onChange={(e) => {onChange(e, "email")}}
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                placeholderTextColor="#969696"
                secureTextEntry={true}
                onChange={(e) => {onChange(e, "password")}}
            />            
            <TouchableOpacity onPress={login}>
                <Text style={styles.btnText}>Iniciar Sesión</Text> 
            </TouchableOpacity>
            <View style={styles.register}>                    
                <TouchableOpacity onPress={changeForm}>
                    <Text style={styles.btnText}>Registrate</Text> 
                </TouchableOpacity>
            </View>
        </>
    )
}

function defaultValue(){
    return {
        email: "",
        password: ""
    }
}

const styles = StyleSheet.create({
    btnText:{
        color: '#fff',
        fontSize: 18,
    },    
    input:{
        height: 50,
        color: '#fff',
        width: '80%',
        marginBottom: 25,
        backgroundColor: '#1e3040',
        paddingHorizontal: 20,
        borderRadius: 50,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#1e30',
    },
    register:{
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 20,
    }
});