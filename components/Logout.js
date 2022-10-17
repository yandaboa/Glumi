import { View, Alert, Text, Image } from 'react-native';
import { logout } from './../style/style.js';

export default () => {
    return (
        <View style={logout.container}>
            <View style={logout.background}>
                <Image
                    style={logout.sprout}
                    source={require('../assets/sproutNoRing.svg')}
                />
            </View>
            <View style={logout.content}>
                <Text style={logout.text}>you have successfully logged out</Text>
                <View >
                    <Text style={logout.loginText}>need to login? <Text style={logout.login} onPress={() => Alert.alert('logged out')}>login</Text></Text>
                </View>
            </View>
        </View>
    );
}