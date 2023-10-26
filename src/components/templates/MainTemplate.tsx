import { View, ImageBackground, StyleSheet } from 'react-native';
import { Outlet } from 'react-router-native';
import { BottomNavbar } from '@/components/elements';
import Constants from 'expo-constants';
import { Theme } from '@/styles';
import { StatusBar } from 'expo-status-bar';

export default function MainTemplate() {
    return (
        <View className="h-full bg-primary-50" style={{ paddingTop: Constants.statusBarHeight }}>
            <View className="flex-1">
                <Outlet />
            </View>
            <BottomNavbar />
            <StatusBar style="light" backgroundColor={Theme.colors.primary[500]} />
        </View>
    );
}
