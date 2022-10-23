import { Text, View } from 'react-native';
import { setting } from '../style/style.js';

export default () => {
  return (
    <View style={setting.container}>
      <View style={setting.header}>
        <Text style={setting.title}>Settings</Text>
      </View>
      <View style={setting.content}>
        <Text style={setting.subtitle}>Account</Text>
        <View style={setting.section}>
          <View style={setting.selection}>
            <Text style={setting.selectiontext}>profile</Text> {/* delete this if it is not used, this is for entering age weight etc */}
          </View>
          <View style={setting.selection}>
            <Text style={setting.selectiontext}>password</Text>
          </View>
          <View style={setting.selection}>
            <Text style={setting.selectiontext}>email</Text>
          </View>
          <View style={setting.selection}>
            <Text style={setting.selectiontext}>notifications</Text>
          </View>
        </View>
        <Text style={setting.subtitle}>Aesthetics</Text>
        <View style={setting.section}>
          <View style={setting.selection}>
            <Text style={setting.selectiontext}>light mode</Text>
          </View>
          <View style={setting.selection}>
            <Text style={setting.selectiontext}>animations</Text>
          </View>
        </View>
      </View>
    </View>
  );
}