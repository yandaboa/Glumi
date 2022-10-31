import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import InputData from './InputData';
import LogEvent from './LogEvent';

export default () => {
    const [theKey, setTheKey] = useState(0);
    
    useFocusEffect(
        React.useCallback(() => {
            const unsub = () => {setTheKey(Math.random())};
            return () => unsub();
        },
        ))

    return (
        <LogEvent key = {theKey}></LogEvent>
    
    )
}