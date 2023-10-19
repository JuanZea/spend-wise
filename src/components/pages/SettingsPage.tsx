import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { TextInput, Switch } from '@react-native-material/core';
import { StyleSheet } from 'react-native';

export default function SettingsPage() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
    return (
        <View style={styles.container}>
            <View style={styles.backgroundTitle}>
                <Text style={styles.title}>Hola Eliana</Text>
            </View>

            <View style={styles.settings}>
                <Text style={styles.subtitle}>Ajustes</Text>
                <TextInput style={styles.label} label="Nombre" />
                <TouchableOpacity style={styles.button} onPress={() => {}}>
                    <Text style={styles.buttonText}>Actualizar</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.containerSwitch}>
                <Text style={styles.textSwitch}>Activar Notificaciones</Text>
                <Switch
                    trackColor={{ false: '#581c87', true: '#6b21a8' }}
                    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#6b21a8"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    style={styles.switch}
                />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ddd6fe',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 20,
        paddingVertical: 10,
    },

    settings: {
        display: 'flex',
        marginTop: 'auto',
        color: '#FFFFFF',
        alignItems: 'center',
        gap: 10,
        width: '100%',
    },
    backgroundTitle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#6b21a8',
        width: '100%',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        color: '#FFFFFF',
        fontWeight: 'bold',
        backgroundColor: '#6b21a8',
        justifyContent: 'center',
    },
    subtitle: {
        fontSize: 30,
        color: '#581c87',
        flexDirection: 'row',
        fontWeight: 'bold',
        width: '100%',
        justifyContent: 'center',
        padding: 10,
    },

    label: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: 20,
        color: '#581c87',
        width: '80%',
        borderRadius: 15,
    },
    button: {
        display: 'flex',
        backgroundColor: '#581c87',
        borderRadius: 15,
        width: '50%',
        padding: 8,
    },
    buttonText: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: 'bold',
        justifyContent: 'center',
        textAlign: 'center',
    },

    containerSwitch: {
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
    },
    textSwitch: {
        fontSize: 20,
        color: '#581c87',
        fontWeight: 'bold',
    },
    switch: {
        transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
    },
});
