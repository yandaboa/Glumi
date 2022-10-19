import { View, TextInput, Alert, Text, Image } from 'react-native';
import { login } from './../style/style.js';

export default () => {
    return (
        <View style={login.container}>
            <View style={login.background}>
                <View style={login.graphics}>
                    <Image
                        style={login.sprout}
                        source={require('../assets/sprout.svg')}
                    />
                </View>
                <View style={login.content}>
                    <TextInput
                        style={login.input}
                        placeholder="email"
                        placeholderTextColor={"rgba(0,0,0,.3)"}
                    ></TextInput>
                    <TextInput
                        secureTextEntry={true}
                        style={login.input}
                        placeholder="password"
                        placeholderTextColor={"rgba(0,0,0,.3)"}
                    ></TextInput>
                    <View style={login.submit}>
                        <Text onPress={() => Alert.alert('login')} style={login.submitText}>
                            sign in
                        </Text>
                    </View>

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
        </View>
    );
}