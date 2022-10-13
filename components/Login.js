import { View, TextInput, Button, Alert } from 'react-native';
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
                        style={login.input}
                        placeholder="password"
                        placeholderTextColor={"rgba(255,255,255,.8)"}
                    ></TextInput>
                    <Button
                        title="login"
                        style={login.submit}
                        onPress={() => Alert.alert('pressed')}
                    />
                </View>
            </View>
        </>
    );
}