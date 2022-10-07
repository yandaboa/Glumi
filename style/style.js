import { StyleSheet } from 'react-native';
import { vw, vh, vmin } from 'react-native-expo-viewport-units';

const general = StyleSheet.create({

    background: {
        flex: 1,
        flexWrap: 'wrap',
        width: vw(100),
        justifyContent: "center",
        alignItems: "center",
    },

    backgroundGradient: {
        width: vw(100),
        aspectRatio: "9 / 19.5",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        elevation: -1,

    },

    container: {
        flex: 1,
        flexWrap: "wrap",
        flexDirection: "row",
    },

    title: {
        color: '#FFFFFF',
        fontSize: vmin(18),
        position: "relative",
        fontFamily: "Arboria-BoldItalic",
        margin: 30,
    },

    subtitle: {
        color: "#000000",
        fontFamily: "Arboria-Bold",
        fontSize: vmin(6),
    },

    content: {
        flex: 1,
    },

    text: {
        color: '#000000',
        fontSize: vmin(4),
        fontFamily: "Arboria-Book",
    },

});
const home = StyleSheet.create({

    sidebar: {
        position: "fixed",
        right: 0,
        top: 0,
        margin: 20,
        aspectRatio: '1 / 1',
        justifyContent: "center",
        alignItems: "center",
    },

    sidebarIcon: {
        height: 50,
        width: 50,
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
        padding: 20,
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
        width: vw(100),
        flexWrap: "wrap",
    },

    bloodPressureContent: {
        margin: 20,
        marginTop: 0,
        padding: 20,
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        borderRadius: 15,
        height: vw(40), //!subject to change
    },
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