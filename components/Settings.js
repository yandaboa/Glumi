import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { Text, View, Switch, SafeAreaView, Modal, Dimensions, StyleSheet, TextInput } from 'react-native';
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { changeColorMode, setting } from '../style/style.js';
import { authen, updateSettings } from "../Firebase.js";
import { pairDevice, unPair } from "../Firebase.js";
import AddSVG from "../assets/AddSVG.js";
import { currUserName, currUserEmail } from './Login.js';


import { clearData } from "./Data.js";

export default () => {
  const name = currUserName.split(" ");

  const vw = Dimensions.get('window').width;

  const navigation = useNavigation();
  const [isDarkEnabled, setIsDarkEnabled] = useState(false);

  const UID = authen.currentUser.uid;

  const [showProfileModal, setProfileModal] = useState(false);

  const toggleProfileModal = () => {
    setProfileModal(!showProfileModal);
  }
  const [showEditProfileModal, setEditProfileModal] = useState(false);

  const toggleEditProfileModal = () => {
    setEditProfileModal(!showEditProfileModal);
  }

  const [showAboutUsModal, setAboutUsModal] = useState(false);

  const toggleAboutUsModal = () => {
    setAboutUsModal(!showAboutUsModal);
  }

  const toggleDarkSwitch = () => {
    setIsDarkEnabled(!isDarkEnabled);
    updateSets();
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


  const editFirst = (i) => {

  }

  const editLast = (i) => {

  }

  function changeName() {

  }

  const style = StyleSheet.create({
    container: {
      backgroundColor: "#000000aa",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },

    wrapper: {
      backgroundColor: "#ffffff",
      padding: vw * .04,
      borderRadius: vw * .04,
      width: vw * .9,
      height: vw,
    },

    wrapper1: {
      backgroundColor: "#ffffff",
      padding: vw * .04,
      borderRadius: vw * .04,
      width: vw * .9,
      height: vw,
    },

    content: {
      flex: 1,
    },

    header: {
      flexDirection: "row",
    },

    heading: {
      fontSize: vw * .05,
      fontFamily: "BalooTamma2-Medium",
    },

    icon: {
      width: vw * .05,
      height: vw * .05,
    },

    iconContainer: {
      marginLeft: "auto",
    },

    text: {
      fontSize: vw * .04,
      fontfamily: "Comfortaa-Regular",
    },

    name: {
      fontFamily: "Comfortaa-Regular",
      fontSize: vw * .04,
    },

    title: {
      fontFamily: "BalooTamma2-Medium",
      fontSize: vw * .05,
      marginLeft: vw * .04,
    },

    input: {

    },

    submit: {

    },

    submitIcon: {

    },
  });

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
            <Modal
              transparent={true}
              visible={showProfileModal}
            >
              <View style={style.container}>
                <View style={style.wrapper}>
                  <View style={style.header}>
                    <Text style={style.heading}>Profile</Text>
                    <TouchableOpacity
                      onPress={toggleProfileModal}
                      style={style.iconContainer}
                    >
                      <AddSVG
                        fill="#000"
                        style={[style.icon,
                        {
                          transform: [{ rotate: '45deg' }]
                        }]}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={style.content}>
                    <Text style={style.name}><Text style={style.title}>First Name:</Text> {name[0]}</Text>
                    <Text style={style.name}><Text style={style.title}>Last Name:</Text> {name[1]}</Text>
                    <Text style={style.name}><Text style={style.title}>Email:</Text> {currUserEmail}</Text>
                  </View>
                </View>
              </View>
            </Modal>
          </TouchableOpacity>
          <TouchableOpacity style={setting.selection} onPress={toggleEditProfileModal}>
            <Text style={setting.selectionText}>edit profile</Text>
            <Modal
              transparent={true}
              visible={showEditProfileModal}
            >
              <View style={style.container}>
                <View style={style.wrapper}>
                  <View style={style.header}>
                    <Text style={style.heading}>Edit Profile</Text>
                    <TouchableOpacity onPress={toggleEditProfileModal} style={style.iconContainer}>
                      <AddSVG
                        fill="#000"
                        style={[style.icon,
                        {
                          transform: [{ rotate: '45deg' }]
                        }]}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={style.content}>
                    <TextInput
                      style={style.input}
                      onChangeText={(a) => editFirst(a)}
                      placeHolder={name[0]}

                    />
                    <TextInput
                      style={style.input}
                      onChangeText={(a) => editLast(a)}
                      placeHolder={name[1]}
                    />
                    <TouchableOpacity
                      style={style.submit}
                      onPress={changeName()}
                    >
                      <AddSVG style={style.submitIcon} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
          </TouchableOpacity>
          <View style={setting.selection}>
            <Text style={setting.selectionText} onPress={toggleAboutUsModal}>about</Text>
            <Modal
              transparent={true}
              visible={showAboutUsModal}
            >
              <View style={style.container}>
                <View style={style.wrapper1}>
                  <View style={style.header}>
                    <Text style={style.heading}>About</Text>
                    <TouchableOpacity
                      onPress={toggleAboutUsModal}
                      style={style.iconContainer}
                    >
                      <AddSVG
                        fill="#000"
                        style={[style.icon,
                        {
                          transform: [{ rotate: '45deg' }]
                        }]}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={style.content}>
                    <Text style={style.text}>
                      Glumi is a more convenient, non-invasive blood glucose measuring and tracking system for diabetics. Based on multiple clinical studies’ findings of a strong correlation between breath acetone and blood glucose, users start with our smart IoT device–the Breathanalyzer–users will breath into its mouthpiece where breath acetone levels are recorded and passed to the mobile app.
                    </Text>
                  </View>
                </View>

              </View>
            </Modal>
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