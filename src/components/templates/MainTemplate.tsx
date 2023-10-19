import { View, ImageBackground, StyleSheet } from 'react-native';
import { Outlet } from 'react-router-native';
import { BottomNavbar } from '@/components/elements';
import Constants from 'expo-constants';
import image from '../../../assets/img/logo.png';


export default function MainTemplate() {
    return (
        <View style={styles.container}>
            <Outlet />
            <ImageBackground source={image} resizeMode="cover" style={styles.image}/>
            <BottomNavbar />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#ede9fe',
        
        paddingTop: Constants.statusBarHeight,
        flex: 1,
        opacity: 0.9,
    },
    image: {
        flex: 1,
        opacity: 0.2  
    },
});
