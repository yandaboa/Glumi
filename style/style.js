import { StyleSheet } from 'react-native';
import { vw, vh, vmin } from 'react-native-expo-viewport-units';

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
        fontFamily: "Comfortaa-Regular",
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
        fontFamily: "Comfortaa-Regular",
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
        fontFamily: "Comfortaa-Regular",
        textAlign: "center",
    },

    createButton: {
        color: "#E24D50",
        fontSize: vw(4),
        fontFamily: "Comfortaa-Regular",
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
        fontFamily: "BalooTamma2-Bold",
        fontSize: vw(7),
        paddingLeft: vw(10),
        paddingRight: vw(10),
        textAlign: "center",
    },

    loginText: {
        fontFamily: "Comfortaa-Regular",
        fontSize: vw(4),
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

    heading: {
        fontFamily: "BalooTamma2-Bold",
        fontSize: vw(12),
        margin: vw(4),
        fontWeight: "bold",
        color: "#66cc99",
    },

    title: {
        fontFamily: "BalooTamma2-Medium",
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
        fontFamily: "Comfortaa-Regular",
        letterSpacing: vw(1),
        fontSize: vw(4),
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
        fontFamily: "Comfortaa-Regular",
        letterSpacing: vw(1),
        fontSize: vw(4),
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
        fontFamily: "Comfortaa-Regular",
        fontSize: vw(4),
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
        fontFamily: "Comfortaa-Regular",
        textAlign: "center",
    },

    loginButton: {
        color: "#E24D50",
        fontSize: vw(4),
        fontFamily: "Comfortaa-Regular",
        textAlign: "center",
        textDecorationLine: "underline",
    },
});

const home = StyleSheet.create({

    container: {
        height: vh(100),
        width: vw(100),
    },

    background: {
        width: vw(100),
        height: vh(100),
        position: "fixed",
        top: 0,
        left: 0,
        elevation: -1,
    },

    backgroundImage: {
        height: vh(100),
        width: vw(100),
        elevation: 2,
        position: "fixed",
        bottom: 0,
        left: 0,
    },

    title: {
        marginTop: vw(2),
        color: '#000000',
        position: "relative",
        fontSize: vw(8),
        fontFamily: "BalooTamma2-Bold",
        marginLeft: vw(8),
        marginRight: "auto",
    },

    subtitle: {
        color: '#000000',
        position: "relative",
        fontFamily: "Comfortaa-Bold",
        fontSize: vw(5),
        marginLeft: vw(8),
        marginRight: "auto",
    },

    heading: {
        color: '#000000',
        fontFamily: "BalooTamma2-Bold",
        fontSize: vw(5),
    },

    text: {
        color: '#000000',
        fontSize: vw(3.5),
        fontFamily: "Comfortaa-Regular",
    },

    content: {
        flex: 1,
    },

    summary: {
        flex: 2,
        justifyContent: "center",
        paddingBottom: vw(10),
        padding: vw(8),
    },

    slider: {
        flex: 1,
    },

    sliderHeading: {
        marginLeft: vw(8),
    },

    sliderContainer: {
        flex: 1,
        flexDirection: "row",
        width: vw(100),
    },

    sliderElement: {
        width: vw(75),
        height: vw(30),
        flexWrap: "wrap",
        margin: vw(6),
        backgroundColor: "#ffffffbb",
        padding: vw(2),
        borderRadius: vw(2),
        marginTop: 0,
    },

    sidebar: {
        backgroundColor: "#3399FF",
        borderRadius: vw(2),
        position: "absolute",
        height: vw(18),
        border: "none",
    },

    sidebarIcon: {
        width: vw(15),
        aspectRatio: " 1 / 1",
        margin: 100,
    },
});

const bloodSugarGraph = StyleSheet.create({
    high: {
        color: "#E24D50",
        fontFamily: "Comfortaa-Medium",
    },

    midHigh: {
        color: "#FFA26F",
        fontFamily: "Comfortaa-Medium",
    },

    normal: {
        color: "#38B346",
        fontFamily: "Comfortaa-Medium",
    },

    low: {
        color: "#3399FF",
        fontFamily: "Comfortaa-Medium",
    }
});

const pastData = StyleSheet.create({
    background: {
        position: "absolute",
    },

    profile: {
        height: vw(20),
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        margin: vw(6),
    },

    profilePicture: {
        height: vw(20),
        aspectRatio: "1 / 1",
        borderRadius: "50%",
    },

    name: {
        fontFamily: "BalooTamma2-SemiBold",
        fontSize: vw(8),
        marginLeft: vw(6),
    },

    container: {
        flex: 1,
    },

    content: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#6c9",
        borderRadius: vw(4),
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        padding: vw(4),
    },

    main: {
        aspectRatio: "1 / 1",
        width: vw(80),
        backgroundColor: "blue",
        margin: vw(2),
        borderRadius: vw(4),
        justifyContent: "center",
        alignItems: "center",
    },

    wrapper: {
        height: vw(50),
        width: vw(80),
        flexDirection: "row",
        marginTop: vw(2),
    },

    content1: {
        flex: 1,
        backgroundColor: "cyan",
        margin: vw(2),
        borderRadius: vw(4),
        justifyContent: "center",
        alignItems: "center",
    },

    content2: {
        flex: 2,
        backgroundColor: "green",
        margin: vw(2),
        borderRadius: vw(4),
        justifyContent: "center",
        alignItems: "center",
    },

    content3: {
        flex: 3,
        backgroundColor: "yellow",
        margin: vw(2),
        borderRadius: vw(4),
        justifyContent: "center",
        alignItems: "center",
    },

    spacer: {
        widht: vw(100),
        height: vw(20),
        backgroundColor: "yellow",

    },
});

export {
    login,
    logout,
    createAccount,
    home,
    bloodSugarGraph,
    pastData,
}