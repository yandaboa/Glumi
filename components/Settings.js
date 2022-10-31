import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { Text, View, Switch, SafeAreaView } from 'react-native';
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { changeColorMode, setting } from '../style/style.js';
import { authen, updateSettings } from "../Firebase.js";
import { pairDevice, unPair } from "../Firebase.js";
import Profile from "./SettingsComponents/Profile.js";
import { showProfile } from "./SettingsComponents/Profile.js";
import EditProfile, { showEditProfile } from "./SettingsComponents/EditProfile.js";
import { clearData } from "./Data.js";

export default () => {
  const navigation = useNavigation();
  const [isNofEnabled, setIsNofEnabled] = useState(false);
  const [isAnimationsEnabled, setIsAnimationsEnabled] = useState(false);
  const [isDarkEnabled, setIsDarkEnabled] = useState(false);

  const UID = authen.currentUser.uid;

  const [showProfileModal, setProfileModal] = useState(false);

  const toggleProfileModal = () => {
    setProfileModal(!showProfileModal);
    showProfile(showProfileModal);
  }
  const [showEditProfileModal, setEditProfileModal] = useState(false);

  const toggleEditProfileModal = () => {
    setEditProfileModal(!showEditProfileModal);
    showEditProfile(showEditProfileModal);
  }

  function toggleNofSwitch() {
    setIsNofEnabled();
    updateSets();
  };
  const toggleAnimationsSwitch = () => {
    setIsAnimationsEnabled(previousState => !previousState)
    updateSets();
  };

  const toggleDarkSwitch = () => {
    setIsDarkEnabled(!isDarkEnabled);
    updateSets();
    // setTimeout(() => {navigation.navigate("Loading");}, 500);

  };

  const startPairing = () => {
    console.log(UID);
    pairDevice(UID);
  }

  function updateSets() {
    changeColorMode(isDarkEnabled);
    updateSettings(UID, isDarkEnabled);
  }

  updateSets();

  const stopPairing = () => {
    unPair();
  }

  const handleLogout = () => {
    signOut(authen).then(() => {
      clearData();
      navigation.replace("Login")
    })
      .catch(error => console.log(error.message))
  }

  return (
    <View style={setting.container}>
      <View style={setting.header}>
        <SafeAreaView>
          <Text style={setting.title}>Settings</Text>
        </SafeAreaView>
      </View>
      <View style={setting.content}>
        <View style={setting.section}>
          <TouchableOpacity style={setting.selection} onPress={toggleProfileModal}>
            <Text style={setting.selectionText}>profile</Text>
            <Profile/>
          </TouchableOpacity>
          <TouchableOpacity style={setting.selection} onPress={toggleEditProfileModal}>
            <Text style={setting.selectionText}>edit profile</Text>
            <EditProfile/>
          </TouchableOpacity>
          <View style={setting.selection}>
            <Text style={setting.selectionText}>password</Text>
          </View>
          <View style={setting.selection}>
            <Text style={setting.selectionText}>about us</Text>
          </View>
          <View style={setting.section}>
            <View style={setting.selection}>
              <Text style={setting.selectionText}>dark mode</Text>
              <Switch style={[setting.switchTheme, setting.switch]}
                trackColor={{ false: "#ddd", true: "#333" }}
              thumbColor={isDarkEnabled ? "#ddd" : "#333"}
                activeThumbColor={"#ddd"}
                onValueChange={toggleDarkSwitch}
              value={isDarkEnabled}
              />{/*isDarkEnabled ? "#ddd" : "#333"value={isDarkEnabled}*/}
            </View>
          </View>
          <View style={setting.spacer} />
          <TouchableOpacity style={[setting.selection, setting.pairDevice]}
            onPressIn={startPairing} onPressOut={stopPairing}>
            <Text style={[setting.selectionText, setting.signoutText]}>Pair Device</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[setting.selection, setting.signout]} onPress={handleLogout}>
            <Text style={[setting.selectionText, setting.signoutText]}>sign out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}