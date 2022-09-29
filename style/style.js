import { StyleSheet } from 'react-native';
import { vw, vh } from 'react-native-expo-viewport-units';

const general = StyleSheet.create({

    background: {
        flex: 1,
        flexWrap: 'wrap',
        width: "100",
        height: "100%",
    },

    container: {
        flex: 1,
        flexWrap: "wrap",
        flexDirection: "row",
    },

    title: {
        color: '#FFFFFF',
        fontSize: 64,
        position: "relative",
        fontFamily: "Arboria-BoldItalic",
    },

    content: {
        flex: 1,
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
        backgroundColor: "#FFFFFF",
        width: vw(80),
        height: vw(80),
    },

    subContent: {
        flexDirection: "row",
        width: "100%",
    },

    infographAnalysis: {
        flexWrap: "wrap",
        width: "50%",
        backgroundColor: "#00FF00",
    },

    inputData: {
        backgroundColor: "#0000FF",
    },

    bloodPressure: {

    }
});

const bloodSugarGraph = StyleSheet.create({
    high: {
        color: "#E24D50",
        fontFamily: "Arboria-Medium",
    },

    midHigh: {
        color: "#FFA26F",
        fontFamily: "Arboria-Medium",
    },

    normal: {
        color: "#38B346",
        fontFamily: "Arboria-Medium",
    },

    low: {
        color: "#3295EF",
        fontFamily: "Arboria-Medium",
    }
});

export { general, homescreen, bloodSugarGraph }