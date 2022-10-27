import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { settingStyles } from './settingsStyles'
import { Modal } from 'react-native-web'

let showingProfile = false;

export function showProfile(show){
    showingProfile = show;
}

const Profile = () => {

  return (
    <Modal
    transparent = {true}
    visible={showingProfile}
    >
        <View style={settingStyles.outerModal}>
            <View style={settingStyles.innerModal}>
                <Text style={settingStyles.modalText}>Profile</Text>
            </View>
        </View>
    </Modal>
  )
}

export default Profile;

