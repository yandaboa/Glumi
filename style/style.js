import { StyleSheet } from 'react-native';

const fontStyle = StyleSheet.create({
    black:{
        fontFamily: "Arboria-Black"
    },
    bold:{
        fontFamily: "Arboria-Bold"
    },
    medium:{
        fontFamily: "Arboria-Medium"
    },
    book:{
        fontFamily: "Arboria-Book"
    },
    blackItalic:{
        fontFamily: "Arboria-BlackItalic"
    },
    boldItalic:{
        fontFamily: "Arboria-BoldItalic"
    },
    mediumItalic:{
        fontFamily: "Arboria-MediumItalic"
    },
    bookItalic:{
        fontFamily: "Arboria-BookItalic"
    },
});

const style = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        padding: 50,
        paddingTop: 100,
    },

    title: {
        color: '#FFFFFF',
        position: "absolute",
        fontSize: 60,
        top: 100,
        left: 50,
    },

    text: {
        color: '#CCCCFF',
        fontSize: 18,
    }
});

export { style, fontStyle }