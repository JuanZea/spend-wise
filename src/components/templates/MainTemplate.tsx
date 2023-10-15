import { View, Text, Button } from 'react-native';
import { Outlet } from 'react-router-native';
import { BottomNavbar } from '@/components/elements';
import Constants from 'expo-constants';

export default function MainTemplate() {
    return (
        <View
            style={{ width: '100%', height: '100%', backgroundColor: '#FFFFE0', paddingTop: Constants.statusBarHeight }}
        >
            <Outlet />

            <BottomNavbar />
        </View>
    );
}
