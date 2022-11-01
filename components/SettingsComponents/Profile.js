import { StyleSheet, View, Text, Dimensions, Modal } from 'react-native'
import React from 'react'
import AddSVG from '../../assets/AddSVG.js'
import { TouchableOpacity } from 'react-native-web';
import { currUserName, currUserEmail } from '../Login.js';

let showingProfile = false;


export function showProfile(show) {
  showingProfile = show;
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
    marginTop: vw * .04,
  },

  header: {
    flexDirection: "row",
  },

  heading: {
    fontSize: vw * .06,
    fontFamily: "BalooTamma2-Medium",
  },

  icon: {
    width: vw * .06,
    height: vw * .06,
    marginLeft: "auto",
  },

  name: {
    fontFamily: "Comfortaa-Regular",
    fontSize: vw * .04,
  },

  title: {
    fontFamily: "BalooTamma2-Medium",
    fontSize: vw * .05,
    marginLeft: vw * .04,
  }

});


const Profile = () => {
  const name = currUserName.split(" ");

  return (
    <Modal
      transparent={true}
      visible={showingProfile}
    >
      <View style={style.container}>
        <View style={style.wrapper}>
          <View style={style.header}>
            <Text style={style.heading}>Profile</Text>
            <AddSVG
              fill="#000"
              style={[style.icon,
              {
                transform: [{ rotate: '45deg' }]
              }]}
            />
          </View>
          <View style={style.content}>
            <Text style={style.name}><Text style={style.title}>First Name:</Text> {name[0]}</Text>
            <Text style={style.name}><Text style={style.title}>Last Name:</Text> {name[1]}</Text>
            <Text style={style.name}><Text style={style.title}>Email:</Text> {currUserEmail}</Text>

          </View>
        </View>

      </View>
    </Modal>
  )
}

export default Profile;

