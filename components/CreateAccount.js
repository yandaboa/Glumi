import { View, TextInput, Alert, Text } from 'react-native';
import { createAccount } from './../style/style.js';

export default () => {
    return (
        <View style={createAccount.container}>
            <Text style={createAccount.heading}>Welcome!</Text>
            <Text style={createAccount.title}>Name</Text>
            <View style={createAccount.name}>
                <TextInput
                    style={createAccount.inputName}
                    placeholder="first"
                    placeholderTextColor={"rgba(0,0,0,.3)"}
                ></TextInput>
                <TextInput
                    style={[createAccount.inputName, createAccount.last]}
                    placeholder="last"
                    placeholderTextColor={"rgba(0,0,0,.3)"}
                ></TextInput>
            </View>
            <Text style={createAccount.title}>Account</Text>
            <TextInput
                style={createAccount.input}
                placeholder="username"
                placeholderTextColor={"rgba(0,0,0,.3)"}
            ></TextInput>
            <TextInput
                secureTextEntry={true}
                style={createAccount.input}
                placeholder="password"
                placeholderTextColor={"rgba(0,0,0,.3)"}
            ></TextInput>
            <View style={createAccount.submit}>
                <Text onPress={() => Alert.alert('createAccount')} style={createAccount.submitText}>
                    create
                </Text>
            </View>
            <View style={createAccount.login}>
                <Text style={createAccount.loginText} numberOfLines={1}>
                    already have an account? <Text onPress={() => Alert.alert('login')} style={createAccount.loginButton} >login</Text>
                </Text>
            </View>
        </View>
    );
}