import { StyleSheet } from 'react-native';
// var {vw, vh, vmin, vmax} = require('react-native-viewport-units');

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
        flexWrap: "wrap",
        flexDirection: "row",
        width: "100%",
        height: "100%",
    },

    title: {
        color: '#FFFFFF',
        fontSize: 64,
        position: "relative",
        fontFamily: "Arboria-BoldItalic",
    },

    content: {
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
        backgroundColor: "#A020F0",
        position: "absolute",
        right: 0,
        top: 0,
        margin: 10,
    },

    mainInfograph: {
        flexWrap: "wrap",
        backgroundColor: "#FFA500",
        width: "50%",
        aspectRatio: "1 / 1",
    },

    subContent: {
        flexDirection: "row",
        width: "100%",
    },

    inforgraphAnalysis: {
        backgroundColor: "#00FF00",
    },

    inputData: {
        backgroundColor: "#0000FF",
    },

    bloodPressure: {

    }
});

const sugarGraph = StyleSheet.create({

});

export { general, homescreen, sugarGraph}