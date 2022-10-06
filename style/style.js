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
const home = StyleSheet.create({

    sidebar: {
        position: "absolute",
        right: 0,
        top: 0,
        margin: 20,
        aspectRatio: '1 / 1',
        justifyContent: "center",
        alignItems: "center",
    },

    sidebarIcon:{
        height: 50,
        width: 50,
        stroke: "red",
    },

    mainInfograph: {
        flexWrap: "wrap",
        width: vw(100),
        aspectRatio: "1 / 1",
    },

    mainInfographContent: {
        flex: 1,
        backgroundColor: "rgba(255, 255, 255, 0.6)",
        margin: 20,
        borderRadius: 15,
        padding:20,
    },

    subContent: {
        flexDirection: "row",
        width: "100%",
    },

    infographAnalysis: {
        flex: 1.5,
        flexWrap: "wrap",
        backgroundColor: "rgba(255, 255, 255, 0.6)",
        aspectRatio: '1 / 1',
        margin: 20,
        marginRight: 10,
        marginTop: 0,
        borderRadius: 15,
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
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        flexWrap: "wrap",
        margin: 20,
        marginLeft: 10,
        marginTop: 0,
        borderRadius: 15,
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

export { general, home, bloodSugarGraph }