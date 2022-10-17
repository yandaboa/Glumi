import { Image, SafeAreaView, View, Text } from 'react-native';
import { home, menu } from '../style/style.js';

export default function Sidebar() {
  return (
    <View style={home.sidebar}>
      <Image
        style={home.sidebarIcon}
        source={require('../assets/home.svg')}
      />
      <Image
        style={home.sidebarIcon}
        source={require('../assets/input.svg')}
      />
      <Image
        style={home.sidebarIcon}
        source={require('../assets/data.svg')}
      />
      <Image
        style={home.sidebarIcon}
        source={require('../assets/setting.svg')}
      />
    </View>
  );
}