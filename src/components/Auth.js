import React, {useState} from "react";
import {StyleSheet, View, Image} from "react-native";
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

export default function Auth(){
    const [isLoggin, setIsLoggin] = useState(true)
    
    const changeForm = () => {
        setIsLoggin(!isLoggin);
    }
    return(
        <View style={styles.view}>
            <Image style={styles.logo} source={require("../assets/logo.png")}></Image>
            {isLoggin ? <LoginForm changeForm={changeForm}/> : <RegisterForm changeForm={changeForm}/>}
        </View>
    )
}

const styles = StyleSheet.create({
    view:{
        flex: 1,
        alignItems: 'center',
    },
    logo: {
       width:'80%',
       height: 240,
       marginTop: 50,
       marginBottom: 50, 
    }
});