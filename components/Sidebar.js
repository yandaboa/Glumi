import { Image } from 'react-native';
import { home } from '../style/style.js';

export default function Sidebar() {

  return (
    <Image
      style={home.sidebarIcon}
      source={require('../assets/sidebar.svg')}
    />

  );
}