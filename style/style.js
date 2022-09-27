import { StyleSheet } from 'react-native';

// const fontStyle = StyleSheet.create({
//     black: {
//         fontFamily: "Arboria-Black"
//     },
//     bold: {
//         fontFamily: "Arboria-Bold"
//     },
//     medium: {
//         fontFamily: "Arboria-Medium"
//     },
//     book: {
//         fontFamily: "Arboria-Book"
//     },
//     blackItalic: {
//         fontFamily: "Arboria-BlackItalic"
//     },
//     boldItalic: {
//         fontFamily: "Arboria-BoldItalic"
//     },
//     mediumItalic: {
//         fontFamily: "Arboria-MediumItalic"
//     },
//     bookItalic: {
//         fontFamily: "Arboria-BookItalic"
//     },
// });

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
    },

    mainInfograph: {
        flex: 3,
        aspectRatio: "1 / 1",
        flexWrap: "wrap",
        backgroundColor: "orange",
        margin: 10,
    },

    subContent: {
        flex: 1,
        flexDirection: "row",
        width: "100%",
        margin: 10,
    },

    inforgraphAnalysis: {
        backgroundColor: "green",
        flex: 2,
    },

    inputData: {
        flex: 1,
        backgroundColor: "blue",
    },

    bloodPressure: {

    }
});

export { general, homescreen }