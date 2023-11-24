import { app } from '@/helpers';
import { useState } from 'react';
import { Slot, Stack } from 'expo-router';
import { ScrollView, View, Text } from 'react-native';
import { BottomNavbar } from '@elements';
import Constants from 'expo-constants';
import { Theme } from '@/styles';
import { StatusBar } from 'expo-status-bar';
// import './src/input.css'; TODO: for web use

export default function Layout() {
    const [ready, setReady] = useState(false);

    if (!ready) {
        app.initialize().then(() => {
            setReady(true);
        });

        return <Text className="my-auto mx-auto font-bold text-4xl">Cargando...</Text>;
    }

    return (
        <Stack
            screenOptions={{
                contentStyle: { backgroundColor: Theme.colors.primary[50] },
                headerStyle: { backgroundColor: Theme.colors.primary[500] },
                headerTintColor: '#fff',
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="modals/addCategory"
                options={{
                    title: 'Agregar Categoría',
                    headerShown: true,
                    animation: 'slide_from_right',
                    presentation: 'transparentModal',
                }}
            />
        </Stack>
    );
}
