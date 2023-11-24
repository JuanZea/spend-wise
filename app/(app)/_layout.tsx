import { Stack } from 'expo-router';
import { View, Text } from 'react-native';
import { BottomNavbar, AppHeader } from '@elements';
import { Theme } from '@/styles';
import { StatusBar } from 'expo-status-bar';
// import './src/input.css'; TODO: for web use

export default function Layout() {
    return (
        <View className="h-full bg-primary-50">
            <View className="flex-1">
                <Stack
                    screenOptions={{
                        contentStyle: { backgroundColor: Theme.colors.primary[50] },
                        headerStyle: { backgroundColor: Theme.colors.primary[500] },
                        headerTintColor: '#fff',
                        animation: 'fade_from_bottom',
                    }}
                >
                    <Stack.Screen name="index" options={{ headerShown: false }} />
                    <Stack.Screen name="budget" options={{ headerTitle: () => <AppHeader route="budget" /> }} />
                    <Stack.Screen name="categories" options={{ headerTitle: () => <AppHeader route="categories" /> }} />
                    <Stack.Screen name="more" options={{ headerTitle: () => <AppHeader route="more" /> }} />
                    <Stack.Screen
                        name="information"
                        options={{ headerTitle: () => <AppHeader route="information" /> }}
                    />
                    <Stack.Screen
                        name="tipsCalculator"
                        options={{ headerTitle: () => <AppHeader route="tipsCalculator" /> }}
                    />
                </Stack>
            </View>
            <BottomNavbar />
            <StatusBar style="light" backgroundColor={Theme.colors.primary[500]} />
        </View>
    );
}
