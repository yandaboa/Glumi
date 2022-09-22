import { StyleSheet } from 'react-native';

const fontStyle = StyleSheet.create({
    black: {
        fontFamily: "Arboria-Black"
    },
    bold: {
        fontFamily: "Arboria-Bold"
    },
    medium: {
        fontFamily: "Arboria-Medium"
    },
    book: {
        fontFamily: "Arboria-Book"
    },
    blackItalic: {
        fontFamily: "Arboria-BlackItalic"
    },
    boldItalic: {
        fontFamily: "Arboria-BoldItalic"
    },
    mediumItalic: {
        fontFamily: "Arboria-MediumItalic"
    },
    bookItalic: {
        fontFamily: "Arboria-BookItalic"
    },
});

const style = StyleSheet.create({

    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: "scroll",
    },

    container: {
        flex: 1,
    },

    title: {
        color: '#FFFFFF',
        fontSize: 60,
        top: 0,
        left: 0,
    },

    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    text: {
        color: '#CCCCFF',
        fontSize: 18,
    },
});

export { style, fontStyle }