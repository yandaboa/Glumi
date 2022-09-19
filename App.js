import { Text, View } from 'react-native';
import { style } from './style/style.js';
import LinearGradient from 'react-native-linear-gradient';

export default function App() {
  return (

    <View style={styles.container}>
      <LinearGradient
        colors={['red', 'yellow', 'green']}
        style={styles.background}
      >
        <Text>Vertical Gradient</Text>
      </LinearGradient>
    </View>
  );
}

