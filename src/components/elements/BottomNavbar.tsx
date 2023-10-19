import { View, StyleSheet, Pressable } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigate } from '@/hooks';
import IconBottomNavbar from './IconBottomNavbar';
const BottomNavbar = () => {
    const { toHome, toBudget, toCategories, toInformation, toSettings, toTipsCalculator } = useNavigate();

    return (
        <View style={styles.container}>

            <IconBottomNavbar route={toInformation} iconName="md-information-circle-outline" />
            <IconBottomNavbar route={toBudget} iconName="md-cash-outline" />
            <IconBottomNavbar route={toHome} iconName="md-home-outline" />
            <IconBottomNavbar route={toCategories} iconName="md-grid-outline" />
            <IconBottomNavbar route={toSettings} iconName="md-settings-outline" />
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'row',
        marginTop: 'auto',
        justifyContent: 'center',
        gap: 20,
        paddingVertical: 10,
    },
    home:{
        elevation: 8,
    }
});

export default BottomNavbar;
