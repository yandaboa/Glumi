import { Text, View, SafeAreaView, Animated, Image, ScrollView, Dimensions } from 'react-native';

import { home } from '../style/style.js';

export default function LogEvent() {
  return (
    <SafeAreaView>

        <Text style={home.text} >
            Here is the settings page
        </Text>
    </SafeAreaView>
  );
}