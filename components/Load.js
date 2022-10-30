import { View, Text } from 'react-native'
import React from 'react'
import { home } from '../style/style';
import { useNavigation } from '@react-navigation/native';

export default function Load(){
    const navigation = useNavigation();

    setTimeout(() => {
        navigation.navigate("HomePage");
    }, 400); //keep this at at least 400


    return (
        <View style={home.loading}>
            <Text style={home.loadingText}>loading...</Text>
        </View>
    );
}
