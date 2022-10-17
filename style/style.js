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
        fontSize: vw(18),
        position: "relative",
        fontFamily: "Arboria-BoldItalic",
        margin: 30,
    },

    subtitle: {
        color: "#000000",
        fontFamily: "Arboria-Bold",
        fontSize: vw(6),
    },

    content: {
        flex: 1,
    },

    text: {
        color: '#000000',
        fontSize: vw(4),
        fontFamily: "Arboria-Book",
    },

});

const login = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },

    background: {
        backgroundColor: "#ffffff",
        height: "100%",
        width: "100%",
        position: "absolute",
        top: 0,
        left: 0,
    },

    graphics: {
        flex: 1,
        alignItems: "center",
    },

    content: {
        flex: 1,
        justifyContent: 'top',
        alignItems: "center",
    },

    sprout: {
        height: vw(60),
        width: vw(60),
        margin: 0,
        padding: 0,
        marginTop: "auto",
        marginBottom: vw(5),
    },

    input: {
        backgroundColor: "#A6E5FF",
        height: vw(12),
        width: vw(80),
        margin: vw(2),
        borderRadius: vh(12),
        fontFamily: "Arboria-Book",
        letterSpacing: vw(1),
        fontSize: vw(5),
        textAlign: "left",
        paddingLeft: vw(5),
    },

    submit: {
        height: vw(10),
        width: vw(50),
        backgroundColor: "#38B346",
        borderRadius: vh(12),
        justifyContent: "center",
        alignItems: "center",
        letterSpacing: vw(.75),
        margin: vw(2),
    },

    submitText: {
        color: "#FFFFFF",
        fontFamily: "Arboria-Book",
        fontSize: vw(4.5),
    },

    create: {
        height: vw(12),
        width: vw(80),
        justifyContent: "center",
        alignItems: "center",
    },

    createText: {
        color: "#000000",
        fontSize: vw(4),
        fontFamily: "Arboria-Book",
        textAlign: "center",
    },

    createButton: {
        color: "#E24D50",
        fontSize: vw(4),
        fontFamily: "Arboria-Book",
        textAlign: "center",
        textDecorationLine: "underline",
    },

});

const logout = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        height: vh(100),
        width: vw(100),
        justifyContent: "center",
        alignItems: "center",
    },

    background: {
        justifyContent: "center",
        alignItems: "center",
    },

    sprout: {
        height: vw(75),
        aspectRatio: "1 / 1",
    },

    content: {
        justifyContent: "center",
        alignItems: "center",
    },

    text: {
        fontFamily: "Arboria-Bold",
        fontSize: vw(8),
        paddingLeft: vw(10),
        paddingRight: vw(10),
    },

    loginText: {
        fontFamily: "Arboria-Book",
        fontSize: vw(5),
        padding: vw(4),
    },

    login: {
        color: "#ffffff",
        backgroundColor: "#66cc99",
        padding: vw(2),
        paddingLeft: vw(3),
        paddingRight: vw(3),
        borderRadius: vw(1),
        marginLeft: vw(2),
    },
});

const createAccount = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },

    heading:{
        fontFamily: "Arboria-BoldItalic",
        fontSize: vw(12),
        margin: vw(4),
        color: "#66cc99",
    },

    title:{
        fontFamily: "Arboria-Medium",
        fontSize: vw(6),
        marginLeft: vw(10),
        marginRight: "auto",
    },

    name: {
        width: vw(80),
        alignItems: "center",
        flexDirection: "row",
        margin: vw(2),
    },

    inputName: {
        width: vw(38),
        backgroundColor: "#A6E5FF",
        height: vw(12),
        borderRadius: vh(12),
        fontFamily: "Arboria-Book",
        letterSpacing: vw(1),
        fontSize: vw(5),
        textAlign: "left",
        paddingLeft: vw(5),
    },

    last: {
        marginLeft: "auto",
    },

    input: {
        backgroundColor: "#A6E5FF",
        width: vw(80),
        height: vw(12),
        margin: vw(2),
        borderRadius: vh(12),
        fontFamily: "Arboria-Book",
        letterSpacing: vw(1),
        fontSize: vw(5),
        textAlign: "left",
        paddingLeft: vw(5),
    },

    submit: {
        height: vw(10),
        width: vw(50),
        backgroundColor: "#38B346",
        borderRadius: vh(12),
        justifyContent: "center",
        alignItems: "center",
        letterSpacing: vw(.75),
        margin: vw(2),
    },

    submitText: {
        color: "#FFFFFF",
        fontFamily: "Arboria-Book",
        fontSize: vw(4.5),
    },

    login: {
        height: vw(12),
        width: vw(80),
        justifyContent: "center",
        alignItems: "center",
    },

    loginText: {
        color: "#000000",
        fontSize: vw(4),
        fontFamily: "Arboria-Book",
        textAlign: "center",
    },

    loginButton: {
        color: "#E24D50",
        fontSize: vw(4),
        fontFamily: "Arboria-Book",
        textAlign: "center",
        textDecorationLine: "underline",
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
        justifyContent: "center",
        alignItems: "center",
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
        color: "#3399FF",
        fontFamily: "Arboria-Medium",
    }
});

const menu = StyleSheet.create({
    list: {
        display: 'none',
    }
}
)

export { general, login, logout, createAccount, home, bloodSugarGraph, menu }