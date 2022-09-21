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
        <Text style={style.title}>{Greeting()}</Text>
      </LinearGradient>
    </View>
  );
}

function Greeting() {
  let greeting = "Good Morning";
  let time = Date();
  if (time.getHours() > 18) {
    greeting = "Good Afternoon";
  } else if (time.getHours() > 12) {
    greeting = "Good Evening";
  }
  return greeting;
}

