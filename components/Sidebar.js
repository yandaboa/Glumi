import { Image, SafeAreaView, View, Text } from 'react-native';
import { home, menu } from '../style/style.js';

export default function Sidebar() {
  return (
    <SafeAreaView>
      <Image
        style={home.sidebarIcon}
        source={require('../assets/sidebar.svg')}
      />
      <View style={home.menu}>
        {/* <Text>{"Here is the menu"}</Text> */}
      </View>
    </SafeAreaView>
    
    
  );
}