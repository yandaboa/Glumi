import { autoType } from 'd3';
import { StyleSheet } from 'react-native';
import { vw, vh, vmin } from 'react-native-expo-viewport-units';

let home, bloodSugarGraph, pastData, logEvent, setting, login, logout, createAccount;

export function createStyleSheets(){
    home = StyleSheet.create({

        loading: {
            backgroundColor: "#fff",
            justifyContent: "center",
            alignItems: "center",
            width: vw(100),
            height: vh(100),
        },
        loadingText: {
            color: '#000000',
            fontSize: vw(3.5),
            fontFamily: "Comfortaa-Regular",
        },
    
        container: {
            height: vh(100),
            width: vw(100),
            backgroundColor: bk,
            position: "absolute",
        },
    
        wrapper: {
            height: vh(100),
            width: vw(100),
            position: "absolute",
        },
    
        backgroundContainer: {
            height: vh(100),
            width: vw(100),
            position: "absolute",
        },
    
        title: {
            marginTop: vw(2),
            color: "#ff9933",
            position: "relative",
            fontSize: vw(8),
            fontFamily: "BalooTamma2-Bold",
            marginLeft: vw(6),
            marginRight: "auto",
            flexWrap: 'wrap',
        },
    
        subtitle: {
            color: '#fff',
            position: "relative",
            fontFamily: "BalooTamma2-SemiBold",
            fontSize: vw(5.5),
            marginLeft: vw(6),
            marginRight: "auto",
        },
    
        heading: {
            color: '#fff',
            fontFamily: "BalooTamma2-Bold",
            fontSize: vw(6),
        },
    
        text: {
            color: '#000000',
            fontSize: vw(3.5),
            fontFamily: "Comfortaa-Regular",
        },
    
        content: {
            flex: 1,
        },
    
        graphContainer: {
            width: vw(80),
            height: vw(80),
            backgroundColor: base1o,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: vw(4),
            shadowColor: "#000000",
            shadowOffset: { width: vw(1), height: vw(1) },
            shadowOpacity: .2,
            shadowRadius: vw(2),
            borderRadius: vw(2),
        },
    
        summary: {
            flex: 1.75,
            justifyContent: "center",
            paddingBottom: vw(10),
            justifyContent: "center",
            paddingLeft: vw(10),
            paddingTop: vw(14),
        },
    
        slider: {
            flex: 1,
        },
    
        sliderHeading: {
            marginLeft: vw(10),
        },
    
        sliderContainer: {
            flexDirection: "row",
            width: vw(100),
        },
    
        sliderElement: {
            flex: 1,
            width: vw(100),
            padding: 0,
            alignItems: "center",
        },
    
        sliderContent: {
            width: vw(80),
            height: vw(30),
            padding: vw(4),
            backgroundColor: base1o,
            shadowColor: "#000000",
            shadowOffset: { width: vw(1), height: vw(1) },
            shadowOpacity: .2,
            shadowRadius: vw(2),
            borderRadius: vw(2),
            flexWrap: "wrap",
            flexDirection: "row",
            paddingTop: 0,
        },
    
        sidebar: {
            backgroundColor: base,
            position: "absolute",
            height: vw(24),
            border: "none",
            shadowColor: "#000000",
            shadowOffset: { width: 0, height: vw(-2) },
            shadowOpacity: .05,
            shadowRadius: vw(2),
            paddingTop: vw(1),
        },
    
        sidebarIcon: {
            width: vw(12),
            height: vw(12),
            margin: 100,
        },
    
        spacer: {
            width: vw(100),
            height: vw(24),
        },
    
        dotContainer: {
            width: vw(100),
            height: "auto",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            flex: .25,
            backgroundColor: "none",
        },
    
        dot: {
            width: vw(2),
            height: vw(2),
            borderRadius: "50%",
            backgroundColor: "#eee",
            margin: vw(2),
        },
    
        dotActive: {
            width: vw(2),
            height: vw(2),
            borderRadius: "50%",
            backgroundColor: "#ff9933",
            margin: vw(2),
        },
    
        analysisWrapper: {
            flexWrap: "wrap",
            flex: 1,
        },
    
        analysisContainer: {
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            flex: 1,
        },
    
        gulcoseTitle: {
            fontFamily: "BalooTamma2-SemiBold",
            fontSize: vw(4),
            color: "#000",
            marginTop: vw(1),
        }
    });
    
    bloodSugarGraph = StyleSheet.create({
    
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
    
    pastData = StyleSheet.create({
        container: {
            backgroundColor: "red",
        },
    
        profile: {
            height: vw(40),
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            margin: vw(6),
        },
    
    
        profilePicture: {
            height: vw(20),
            width: vw(20),
            borderRadius: "50%",
        },
    
        name: {
            fontFamily: "BalooTamma2-SemiBold",
            fontSize: vw(8),
            marginLeft: vw(6),
        },
    
        container: {
            flex: 1,
            backgroundColor: base7,
        },
    
        content: {
            flexDirection: "column",
            borderRadius: vw(4),
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            padding: vw(4),
            paddingLeft: vw(10),
            paddingRight: vw(10),
            backgroundColor: base3,
            paddingTop: vw(8),
        },
    
        mainContainer: {
            backgroundColor: base1,
            width: vw(80),
            borderRadius: vw(4),
            shadowColor: "#000000",
            shadowOffset: { width: vw(1), height: vw(1) },
            shadowOpacity: .2,
            shadowRadius: vw(2),
            paddingBottom: vw(2),
            marginLeft: 0,
            marginRight: 0,
        },
    
        main: {
            flex: 1,
        },
    
        mainContent: {
            height: "auto",
            width: vw(80),
            justifyContent: "center",
            alignItems: "center",
            padding: vw(2),
        },
    
        divisor: {
            backgroundColor: "#eee",
            height: vw(1),
            width: vw(60),
            borderRadius: vw(.5),
            marginLeft: "auto",
            marginRight: "auto",
        },
    
        labelContainer: {
            flexDirection: "row",
            height: vw(8),
            width: vw(66),
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: vw(4),
            justifyContent: "space-evenly",
            alignItems: "center",
            backgroundColor: base2,
            borderRadius: vw(2),
            margin: vw(4)
        },
    
        label: {
            backgroundColor: "transparent",
        },
    
        labelActive: {
            backgroundColor: base1,
        },
    
        labelStyle: {
            width: vw(30),
            height: vw(6),
            borderRadius: vw(2),
            justifyContent: "center",
            alignItems: "center",
            margin: vw(2),
            color: "#000",
            fontSize: vw(4),
            fontFamily: "BalooTamma2-Medium"
        },
    
        wrapper: {
            height: "auto",
            width: vw(80),
            flexDirection: "row",
            marginTop: vw(4),
        },
    
        content1: {
            backgroundColor: base1,
            width: vw(45),
            height: vw(60),
            borderRadius: vw(4),
            justifyContent: "center",
            alignItems: "center",
            shadowColor: "#000000",
            shadowOffset: { width: vw(1), height: vw(1) },
            shadowOpacity: .2,
            shadowRadius: vw(2),
        },
    
        content2: {
            padding: vw(2),
            marginLeft: vw(4),
            flex: 1,
            backgroundColor: base1,
            margin: 0,
            borderRadius: vw(4),
            shadowColor: "#000000",
            shadowOffset: { width: vw(1), height: vw(1) },
            shadowOpacity: .2,
            shadowRadius: vw(2),
        },
    
        content3: {
            width: vw(80),
            height: vw(80),
            borderRadius: vw(4),
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: base1,
            shadowColor: "#000000",
            shadowOffset: { width: vw(1), height: vw(1) },
            shadowOpacity: .2,
            shadowRadius: vw(2),
        },
    
        spacer: {
            widht: vw(100),
            height: vw(40),
        },
    });
    
    logEvent = StyleSheet.create({
        backgroundElement1: {
            borderBottomRightRadius: "100%",
            backgroundColor: base3,
            height: vw(100),
            width: vw(100),
            position: "absolute",
            top: 0,
            left: 0,
        },
    
        backgroundElement2: {
            borderTopLeftRadius: "100%",
            backgroundColor: base4,
            height: vw(70),
            width: vw(70),
            position: "absolute",
            bottom: 0,
            right: 0,
        },
    
        container: {
            flex: 1,
            flexDirection: "column",
            backgroundColor: base5,
        },
    
        header: {
            height: vw(30),
            justifyContent: "center",
            paddingBottom: 0,
            padding: vw(4),
            paddingLeft: vw(6),
        },
    
        title: {
            color: "#fff",
            fontSize: vw(8),
            fontFamily: "BalooTamma2-Bold",
        },
    
        heading: {
            marginLeft: vw(10),
            marginRight: "auto",
        },
    
        headingText: {
            fontSize: vw(6),
            fontFamily: "BalooTamma2-Bold",
            color: "#fff"
        },
    
        data: {
            width: vw(100),
            height: "auto",
            marginTop: vw(4),
            marginBottom: vw(4),
        },
    
        dataContainer: {
            marginLeft: "auto",
            marginRight: "auto",
            width: vw(80),
            height: vw(80),
            backgroundColor: base2,
            borderRadius: vw(4),
            shadowColor: "#000000",
            shadowOffset: { width: vw(1), height: vw(1) },
            shadowOpacity: .2,
            shadowRadius: vw(2),
        },
    
        leader: {
            backgroundColor: "none",
            margin: 0,
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
        },
    
        leaderText: {
            flex: 1,
            fontFamily: "BalooTamma2-SemiBold",
            textAlign: "center",
            fontSize: vw(4.5),
        },
    
        first: {
            marginTop: 0,
        },
    
        dataElement: {
            width: vw(70),
            height: vw(10),
            margin: vw(2.5),
            marginLeft: "auto",
            marginRight: "auto",
            backgroundColor: base1,
            borderRadius: vw(2),
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
        },
    
        dateLabel: {
            fontFamily: "BalooTamma2-Medium",
            fontSize: vw(5),
            marginRight: vw(10),
            marginLeft: "auto",
            color: "#fff",
        },
    
        add: {
            width: vw(70),
            height: vw(10),
            margin: vw(2.5),
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: vw(2),
            backgroundColor: "#38B346",
            justifyContent: "center",
            alignItems: "center",
        },
    
        addIcon: {
            height: vw(8),
            width: vw(8),
        },
    
        filler: {
            width: vw(70),
            height: vw(10),
            margin: vw(2.5),
            marginLeft: "auto",
            marginRight: "auto",
        },
    
        dataText: {
            flex: 1,
            fontFamily: "Comfortaa-Regular",
            fontSize: vw(4),
            textAlign: "center",
        },
    
        iconContainer: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        },
    
        icon: {
            height: vw(8),
            width: vw(8),
        },
    
        spacer: {
            height: vw(40),
        },
    
        dropbarContainer: {
            width: vw(80),
            marginLeft: "auto",
            marginRight: "auto",
        },
    });
    
    setting = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: base2,
        },
    
        header: {
            width: vw(100),
            justifyContent: "center",
            backgroundColor: base6,
            paddingBottom: vw(8),
            borderRadius: vw(4),
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            marginBottom: vw(10),
        },
    
        title: {
            fontFamily: "BalooTamma2-Bold",
            fontSize: vw(8),
            marginLeft: vw(8),
            textAlign: "left",
            color: "#fff",
            paddingBottom: vw(4),
        },
    
        content: {
            flex: 10,
        },
    
        subtitle: {
            paddingTop: vw(4),
            fontFamily: "Comfortaa-Bold",
            fontSize: vw(6),
            marginLeft: vw(8),
            marginRight: "auto",
            marginBottom: vw(8),
        },
    
        section: {
            width: vw(100),
        },
    
        selection: {
            width: vw(80),
            backgroundColor: base1,
            margin: vw(2),
            marginLeft: vw(8),
            padding: vw(2),
            paddingLeft: vw(6),
            paddingRight: vw(6),
            borderRadius: vw(2),
            height: vw(12),
            shadowColor: "#000000",
            shadowOffset: { width: vw(1), height: vw(1) },
            shadowOpacity: .2,
            shadowRadius: vw(2),
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
        },
    
        selectionText: {
            flex: 1,
            fontFamily: "Comfortaa-Regular",
            fontSize: vw(4),
        },
    
        switch: {
            height: vw(5),
        },
    
        signout: {
            backgroundColor: "#ff9933"
        },
    
        pairDevice: {
            backgroundColor: "#38B346"
        },
    
        signoutText: {
            color: "#fff",
            textAlign: "center",
            fontFamily: "Comfortaa-Bold",
        },
    
        spacer: {
            width: vw(100),
            height: vw(10)
        },
    });
    login = StyleSheet.create({
        container: {
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
        },
    
        background: {
            backgroundColor: "#eee",
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
    
        input: {
            backgroundColor: "#fff",
            shadowColor: "#000000",
            shadowOffset: { width: vw(1), height: vw(1) },
            shadowOpacity: .2,
            shadowRadius: vw(2),
            height: vw(12),
            width: vw(80),
            margin: vw(2),
            borderRadius: vw(4),
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
            borderRadius: vw(4),
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
    
    logout = StyleSheet.create({
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
            width: vw(75),
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
    
    
    createAccount = StyleSheet.create({
        container: {
            backgroundColor: "#fff",
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
            backgroundColor: "#fff",
            shadowColor: "#000000",
            shadowOffset: { width: vw(1), height: vw(1) },
            shadowOpacity: .2,
            shadowRadius: vw(2),
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
            backgroundColor: "#fff",
            shadowColor: "#000000",
            shadowOffset: { width: vw(1), height: vw(1) },
            shadowOpacity: .2,
            shadowRadius: vw(2),
            width: vw(80),
            height: vw(12),
            margin: vw(2),
            borderRadius: vw(4),
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
    
    

}
let dark = false;
let base = "#fff";
let base1 = "#fff";
let base2 = "#ddd";
let base3 = "#517920";
let base4 = "#709c34";
let base5 = "#303c14";
let base6 = "#66cc99";
let base7 = "#fff";
let base1o = "rgba(255, 255,255, .9)";
let bk = "#99ccff";

createStyleSheets();

export function changeColorMode(isDark) {
  dark = isDark;
  if (dark) {
    base = "#202c44";
    base1 = "#acc6e2";
    base2 = "#567AB4";
    base3 = "#101c34";
    base4 = "#304454";
    base5 = "#101424";
    base6 = "#101424";
    base7 = "#536C7C";
    base1o = "rgba(172, 198, 226, 0.9)";

    bk = "#536C7C";
  } else {
    base = "#fff";
    base1 = "#fff";
    base2 = "#ddd";
    base3 = "#517920";
    base4 = "#709c34";
    base5 = "#303c14";
    base6 = "#66cc99";
    base7 = "#fff";
    base1o = "rgba(255, 255,255, .9)";
    bk = "#99ccff";
  }

  createStyleSheets();
  console.log(dark);
}

export {
    login,
    logout,
    createAccount,
    home,
    bloodSugarGraph,
    pastData,
    logEvent,
    setting,
}