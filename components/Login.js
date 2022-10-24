import { NavigationContainer } from '@react-navigation/native';
import { View, TextInput, Alert, Text, Image } from 'react-native';
import { KeyboardAvoidingView } from 'react-native-web';
import { useNavigation } from '@react-navigation/native';
import { login } from './../style/style.js';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { authen } from '../Firebase.js';
import { useEffect, useState } from 'react';

export default () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(authen, user => {
            if(user) {
                navigation.navigate("HomePage");
            }
        })
        return unsubscribe;
    }, [])

    const handleLogin = () => {
        signInWithEmailAndPassword(authen, email, password)
        .then (userCredentials => {
            const user = userCredentials.user;
            console.log("Logged in with " + user.email);
        })
        .catch(error => alert(error.message))
    }

    return (
        <KeyboardAvoidingView style={login.container}>
            <View style={login.background}>
                <View style={login.graphics}>
                    <Image
                        style={login.sprout}
                        source={require('../assets/SVG/sprout.svg')}
                    />
                </View>
                <View style={login.content}>
                    <TextInput
                        style={login.input}
                        placeholder="email"
                        placeholderTextColor={"rgba(0,0,0,.3)"}
                        onChangeText={text => setEmail(text)}
                    ></TextInput>
                    <TextInput
                        secureTextEntry={true}
                        style={login.input}
                        placeholder="password"
                        placeholderTextColor={"rgba(0,0,0,.3)"}
                        onChangeText={text => setPassword(text)}
                    ></TextInput>
                    <View style={login.submit}>
                        <Text onPress={handleLogin} style={login.submitText}>
                            sign in
                        </Text>
                    </View>

                    <View style={login.create}>
                        <Text style={login.createText} numberOfLines={1}>
                            need an account? <Text onPress={() => {navigation.navigate("CreateAccount")}} style={login.createButton} >create</Text>
                        </Text>
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}