import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { Text, View, Switch } from 'react-native';
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { setting } from '../style/style.js';
import { authen } from "../Firebase.js";

export default () => {
  const navigation = useNavigation()
  const [isNofEnabled, setIsNofEnabled] = useState(false);
  const toggleNofSwitch = () => {
    setIsNofEnabled(previousState => !previousState)
  };
  const [isAnimationsEnabled, setIsAnimationsEnabled] = useState(false);
  const toggleAnimationsSwitch = () => {
    setIsAnimationsEnabled(previousState => !previousState)
  };
  const [isDarkEnabled, setIsDarkEnabled] = useState(false);
  const toggleDarkSwitch = () => {
    setIsDarkEnabled(previousState => !previousState)
  };

  const handleLogout = () => {
    signOut(authen).then(() => {
      navigation.replace("Login")
    })
    .catch(error => console.log(error.message))
  }
  return (
    <View style={setting.container}>
      <View style={setting.header}>
        <Text style={setting.title}>Settings</Text>
      </View>
      <View style={setting.content}>
        <Text style={setting.subtitle}>Account</Text>
        <View style={setting.section}>
          <TouchableOpacity style={setting.selection}
          onPress={handleLogout}>
            <Text style={setting.selectionText}>sign out</Text>
          </TouchableOpacity>
          <View style={setting.selection}>
            <Text style={setting.selectionText}>profile</Text>
          </View>
          {/* delete this if it is not used, this is for entering age weight etc */}
          <View style={setting.selection}>
            <Text style={setting.selectionText}>password</Text>
          </View>
          <View style={setting.selection}>
            <Text style={setting.selectionText}>email</Text>
          </View>
          <View style={setting.selection}>
            <Text style={setting.selectionText}>notifications</Text>
            <Switch style={[setting.switchNotifications, setting.switch]}
              trackColor={{ false: "#ddd", true: "#38b346" }}
              thumbColor={isNofEnabled ? "#ddd" : "#38b346"}
              activeThumbColor={"#eee"}
              onValueChange={toggleNofSwitch}
              value={isNofEnabled}
            />
          </View>
        </View>
        <Text style={setting.subtitle}>Aesthetics</Text>
        <View style={setting.section}>
          <View style={setting.selection}>
            <Text style={setting.selectionText}>light mode</Text>
            <Switch style={[setting.switchTheme, setting.switch]}
              trackColor={{ false: "#ddd", true: "#333" }}
              thumbColor={isDarkEnabled ? "#ddd" : "#333"}
              activeThumbColor={"#ddd"}
              onValueChange={toggleDarkSwitch}
              value={isDarkEnabled}
            />
          </View>
          <View style={setting.selection}>
            <Text style={setting.selectionText}>animations</Text>
            <Switch style={[setting.switchAnimations, setting.switch]}
              trackColor={{ false: "#ddd", true: "#38b346" }}
              thumbColor={isAnimationsEnabled ? "#ddd" : "#38b346"}
              activeThumbColor={"#ddd"}
              onValueChange={toggleAnimationsSwitch}
              value={isAnimationsEnabled}
            />
          </View>
        </View>
      </View>
    </View>
  );
}