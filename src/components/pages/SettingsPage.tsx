import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { TextInput, Switch } from '@react-native-material/core';

export default function SettingsPage() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
    return (
        <View>
            <Text style={{ fontSize: 36 }}>Settings</Text>
            <View>
                <Text>Hola Eliana</Text>
            </View>
            <View>
                <Text>Ajustes</Text>
                <TextInput label="Nombre" />
                <Button title="Actualizar" />
            </View>
            <View>
                <Text>Activar notificaciones</Text>
                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
        </View>

    );
}
