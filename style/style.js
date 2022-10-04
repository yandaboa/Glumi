import { StyleSheet } from 'react-native';
import { vw, vh } from 'react-native-expo-viewport-units';

const general = StyleSheet.create({

    background: {
        flex: 1,
        flexWrap: 'wrap',
        height: vh(100),
        aspectRatio: "19.5 / 9",
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
        margin: 30,
    },

    subtitle: {
        color: "#000000",
        fontFamily: "Arboria-Bold",
        fontSize: 24,
    },

    content: {
        flex: 1,
    },

    text: {
        color: '#000000',
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
        margin: 20,
        flexWrap: "wrap",
        aspectRatio: '1 / 1',
        height: 88,
    },

    mainInfograph: {
        flexWrap: "wrap",
        backgroundColor: "#FFFF00",
        width: vw(100),
        aspectRatio: "1 / 1",
    },

    subContent: {
        flexDirection: "row",
        width: "100%",
    },

    infographAnalysis: {
        flex: 1.5,
        flexWrap: "wrap",
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        aspectRatio: '1 / 1',
        margin: 20,
        marginRight: 10,
        marginTop: 0,
        borderRadius: 10,
        padding: 20,
        flexDirection: "row",
    },

    infographAnalysisTitle: {
        margin: 10,
        marginLeft: 0,
        marginTop: 0,
    },

    inputData: {
        flex: 1,
        backgroundColor: "#0000FF",
        flexWrap: "wrap",
        margin: 20,
        marginLeft: 10,
        marginTop: 0,
        borderRadius: 5,
        padding: 10,
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