import { app } from '@/helpers';
import { useState } from 'react';
import { Stack } from 'expo-router';
import { Text } from 'react-native';
import { Theme } from '@/styles';
import { AppRegistry } from 'react-native';
// import { PaperProvider } from 'react-native-paper';
import { MD3LightTheme as DefaultTheme,  PaperProvider } from 'react-native-paper';
// import './src/input.css'; TODO: for web use

const theme = {
    ...DefaultTheme,
    myOwnProperty: true,
    colors: {
      ...DefaultTheme.colors,
      background: Theme.colors.primary[50],
      primary: Theme.colors.primary[500],
    },
  };

export default function Layout() {
    const [ready, setReady] = useState(false);

    if (!ready) {
        app.initialize().then(() => {
            setReady(true);
        });

        return <Text className="my-auto mx-auto font-bold text-4xl">Cargando...</Text>;
    }

    return (
        <PaperProvider theme={theme}>
            <Stack
                screenOptions={{
                    contentStyle: { backgroundColor: Theme.colors.primary[50] },
                    headerStyle: { backgroundColor: Theme.colors.primary[500] },
                    headerTintColor: '#fff',
                    headerShown: false,
                }}
            >
                <Stack.Screen
                    name="modals/storeCategory/[action]"
                    options={{
                        headerShown: true,
                        animation: 'slide_from_right',
                        presentation: 'transparentModal',
                    }}
                />
            </Stack>
        </PaperProvider>
    );
}

AppRegistry.registerComponent('spendwise', () => Layout);