import { View, TextInput, Button, Alert, Text } from 'react-native';
import { login } from './../style/style.js';

export default function Login() {
    return (
        <>
            <View style={login.container}>
                <View style={login.background}>
                    <View style={login.ring}>
                        <View style={login.svg}></View>
                    </View>
                    <TextInput
                        style={login.input}
                        placeholder="username"
                        placeholderTextColor={"rgba(255,255,255,.8)"}
                    ></TextInput>
                    <TextInput
                        secureTextEntry={true}
                        style={login.input}
                        placeholder="password"
                        placeholderTextColor={"rgba(255,255,255,.8)"}
                    ></TextInput>
                    <View style={login.submit}>
                        <Text onPress={() => Alert.alert('login')} style={login.submitText}>
                            sign in
                        </Text>
                    </View>
                    <View style={login.create}>
                        <Text style={login.createText} numberOfLines={1}>
                            need an account? <Text onPress={() => Alert.alert('create')} style={login.createButton} >create</Text>
                        </Text>
                    </View>
                </View>
            </View>
        </>
    );
}