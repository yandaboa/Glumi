import React, { useState } from 'react';
import { View, TextInput, Alert, Text } from 'react-native';
import { createAccount } from './../style/style.js';
import { authen } from '../Firebase.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default () => {
    const [signedIn, setSignedIn] = useState(false);
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = () => {
        createUserWithEmailAndPassword(authen, email, password)
            .then((e) => {
                console.log(e);
            }).catch((e) => {
                console.log(e);
            })
    }

    return (
        <View style={createAccount.container}>
            <Text style={createAccount.heading}>Welcome!</Text>
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
                    have an account? <Text onPress={() => Alert.alert('login')} style={createAccount.loginButton} >login</Text>
                </Text>
            </View>
        </View>
    );
}