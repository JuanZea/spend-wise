import { TextInput } from '@react-native-material/core';
import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { CText, CButton } from '../elements';
import { Theme } from '@/styles';

export default function TipsPage() {

    return (
        <View style={styles.container}>
            <View style={styles.tips}>
            <CText children={'Tips'} fontWeight='bold' textSize='lg' textColor='light'/>
            <TextInput style={styles.input} label="% de propina" />
            <TextInput
                style={styles.input}
                label="Valor"
                keyboardType="numeric"
            />
            <CButton label="Calcular" />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tips: {
        backgroundColor: Theme.colors.primary[500],
        borderRadius: 16,
        width: '90%',
        padding: 10,
        alignItems: 'center',
        gap: 10,
    },

    input:{
        width: '90%',
    }
});