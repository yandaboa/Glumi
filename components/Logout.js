import { View, Alert, Text, Image } from 'react-native';
import { logout } from '../style/style.js';
import SproutNoRingSVG from '../assets/SproutNoRing.js'

export default () => {
    return (
        <View style={logout.container}>
            <View style={logout.background}>
                <SproutNoRingSVG />
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