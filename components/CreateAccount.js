import React, { useState } from 'react';
import { View, TextInput, Alert, Text } from 'react-native';
import { createAccount } from './../style/style.js';
import { authen, createUserData } from '../Firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { KeyboardAvoidingView } from 'react-native';
import Login from './Login.js';
import { useNavigation } from '@react-navigation/native';

const CreateAccount = () => {
    const navigation = useNavigation();

    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const register = () => {
        createUserWithEmailAndPassword(authen, email, password)
            .then((e) => {
                createUserData(e.user.uid, first + " " + last, email);
                navigation.navigate("Login");
                console.log("Registered with " + e.email);
            }).catch((e) => {
                console.log(e);
            })
    }

    const handleLogin = () => {
        signInWithEmailAndPassword(authen, email, password)
            .then((e) => {
                // const user = e.user;
                console.log("Logged in with" + e.email);
            }).catch((e) => {
                console.log(e);
            })
    }

    return (
        <KeyboardAvoidingView style={createAccount.container}>
            <Text style={createAccount.heading}>Hello There!</Text>
            <Text style={createAccount.title}>Name</Text>
            <View style={createAccount.name}>
                <TextInput
                    style={createAccount.inputName}
                    placeholder="first"
                    placeholderTextColor={"rgba(0,0,0,.3)"}
                    value={first}
                    onChangeText={text => setFirst(text)}
                ></TextInput>
                <TextInput
                    style={[createAccount.inputName, createAccount.last]}
                    placeholder="last"
                    placeholderTextColor={"rgba(0,0,0,.3)"}
                    value={last}
                    onChangeText={text => setLast(text)}
                ></TextInput>
            </View>
            <Text style={createAccount.title}>Account</Text>
            <TextInput
                style={createAccount.input}
                placeholder="email"
                placeholderTextColor={"rgba(0,0,0,.3)"}
                value={email}
                onChangeText={text => setEmail(text)}
            ></TextInput>
            <TextInput
                secureTextEntry={true}
                style={createAccount.input}
                placeholder="password"
                placeholderTextColor={"rgba(0,0,0,.3)"}
                value={password}
                onChangeText={text => setPassword(text)}
            ></TextInput>
            <View style={createAccount.submit}>
                <Text onPress={register} style={createAccount.submitText}>
                    create
                </Text>
            </View>
            <View style={createAccount.login}>
                <Text style={createAccount.loginText} numberOfLines={1}>
                    have an account? <Text onPress={() => { navigation.navigate("Login") }} style={createAccount.loginButton} >login</Text>
                </Text>
            </View>
        </KeyboardAvoidingView>
    );
}

export default CreateAccount;