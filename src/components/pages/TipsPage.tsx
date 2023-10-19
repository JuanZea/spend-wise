import { TextInput } from '@react-native-material/core';
import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';



export default function TipsPage() {
    
    return (
        <View>
            <Text style={{ fontSize: 36 }}>Tips</Text>
            <TextInput label="% de propina" />
            <TextInput
                style={styles.input}
                label="Valor"
                keyboardType="numeric"
            />

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        paddingHorizontal: 10,
        width: 200,
        marginBottom: 10,
    },
});