import { StyleSheet } from 'react-native';
var {vw, vh, vmin, vmax} = require('react-native-viewport-units');

const general = StyleSheet.create({

    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        height: "100%",
        width: "100%",
    },

    container: {
        flex: 1,
        flexWrap: "wrap",
        flexDirection: "row",
        width: "100%",
        height: "100%",
        margin: 10,
    },

    title: {
        color: '#FFFFFF',
        fontSize: 64,
        position: "relative",
        fontFamily: "Arboria-BoldItalic",
    },

    content: {
        flex: 3,
        justifyContent: "center",
        alignItems: "center",
    },

    text: {
        color: '#FFFFFF',
        fontSize: 18,
        fontFamily: "Arboria-Book",
    },

});
const homescreen = StyleSheet.create({

    sideBar: {
        backgroundColor: "purple",
        position: "absolute",
        right: 0,
        top: 0,
    },

    mainInfograph: {
        flex: 3,
        aspectRatio: "1 / 1",
        flexWrap: "wrap",
        backgroundColor: "#FFA500",
        margin: 10,
    },

    subContent: {
        flex: 1,
        flexDirection: "row",
        width: "100%",
        margin: 10,
    },

    inforgraphAnalysis: {
        backgroundColor: "#00FF00",
        flex: 2,
    },

    inputData: {
        flex: 1,
        backgroundColor: "#0000FF",
    },

    bloodPressure: {

    }
});

export { general, homescreen }