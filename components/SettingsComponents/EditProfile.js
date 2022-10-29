import { StyleSheet, Text, View, Modal } from 'react-native'
import React from 'react'
import { settingStyles } from './settingsStyles'

let showingEditProfile = false;

export function showEditProfile(show){
    showingEditProfile = show;
}

const EditProfile = () => {

  return (
    <Modal
    transparent = {true}
    visible={showingEditProfile}
    >
        <View style={settingStyles.outerModal}>
            <View style={settingStyles.innerModal}>
                <Text style={settingStyles.modalText}>Edit Profile</Text>
            </View>
        </View>
    </Modal>
  )
}

export default EditProfile;

