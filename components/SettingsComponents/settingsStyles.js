import { StyleSheet } from "react-native";
import { vw, vh, vmin } from 'react-native-expo-viewport-units';

const settingStyles = StyleSheet.create({
    outerModal: {
        backgroundColor: "#000000aa",
        flex: 1
    },
    innerModal: {
        backgroundColor: "#ffffff",
        margin: vw(20),
        padding: vw(15),
        borderRadius: vw(4),
        flex:1
    },
    modalText: {
        fontSize: vw(4)
    } ,
})

export{settingStyles};