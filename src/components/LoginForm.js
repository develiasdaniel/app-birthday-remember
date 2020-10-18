import React, {useState} from "react";
import {StyleSheet, View, Text, TouchableOpacity} from "react-native";

export default function LoginForm(props){
    const {changeForm} = props;
    return(
        <View style={styles.view}>
            <Text>Login form.</Text>
            <TouchableOpacity onPress={changeForm}>
                <Text style={styles.btnText}>Registrate</Text> 
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    btnText:{
        color: '#fff',
        fontSize: 18,
    }
});