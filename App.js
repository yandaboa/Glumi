import { Text, View } from 'react-native';
import { style } from './style/style.js';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <View style={style.container}>
      <LinearGradient
        colors={['#66CC99', '#3399FF', '#CCCCFF']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={style.background}
      >
        <Text>RENA OUR SAVIOR</Text>
      </LinearGradient>
    </View>
  );
}

