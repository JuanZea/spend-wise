import { View, ImageBackground, StyleSheet } from 'react-native';
import { Outlet } from 'react-router-native';
import { BottomNavbar } from '@/components/elements';
import Constants from 'expo-constants';
// import image from '../../../assets/img/logo.png';

export default function MainTemplate() {
    return (
        <View style={styles.container}>
            {/* <ImageBackground source={image} resizeMode="cover" style={styles.image} /> */}
            <Outlet />
            <BottomNavbar />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#fff',
        paddingTop: Constants.statusBarHeight,
        flex: 1,
    },
    image: {
        flex: 1,
        opacity: 0.4,
    },
});
