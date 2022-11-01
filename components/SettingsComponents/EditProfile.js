import { StyleSheet, View, Text, Dimensions, Modal } from 'react-native'
import React from 'react'
import AddSVG from '../../assets/AddSVG.js'
import { TouchableOpacity } from 'react-native-web';

let showingEditProfile = false;

export function showEditProfile(show) {
  showingEditProfile = show;
}


const vw = Dimensions.get('window').width;

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
    marginLeft: "auto",
  },

});

const EditProfile = () => {
  return (
    <Modal
      transparent={true}
      visible={showingEditProfile}
    >
      <View style={style.container}>
        <View style={style.wrapper}>
          <View style={style.header}>
            <Text style={style.heading}>Edit Profile</Text>
            <AddSVG
              fill="#000"
              style={[style.icon,
              {
                transform: [{ rotate: '45deg' }]
              }]}
            />
          </View>
          <View style={style.content}>
          </View>
        </View>

      </View>
    </Modal>
  )
}

export default EditProfile;

