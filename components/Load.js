import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';
import { TrashSVG } from '../assets/TrashSVG.js';

export default function Load() {
    const navigation = useNavigation();
    const vw = Dimensions.get("window").width;
    const time = 500;

    const goToNext = () => {setTimeout(() => {
        navigation.navigate("HomePage");
    }, time)};

    useFocusEffect(
        React.useCallback(() => {
          goToNext();
        },
      ))

    const style = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "#eee",
            justifyContent: "center",
            alignItems: "center",
        },

        text: {
            fontFamily: "Comfortaa-Bold",
            fontSize: vw * .06,

        },
    })

    return (
        <View style={style.container}>
            <View style={style.content}>
            </View>
            <Text style={style.text}>loading...</Text>
        </View>
    );
}
