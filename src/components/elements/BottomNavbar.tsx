import { View, StyleSheet, Pressable } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigate } from '@/hooks';

const BottomNavbar = () => {
    const { toHome, toBudget, toCategories, toInformation, toSettings, toTipsCalculator } = useNavigate();

    return (
        <View style={styles.container}>
            <Pressable onPress={toInformation}>
                <Icon name="information-outline" size={50} />
            </Pressable>

            <Pressable onPress={toBudget}>
                <Icon name="text-box-multiple-outline" size={50} />
            </Pressable>

            <Pressable onPress={toHome}>
                <Icon name="home-circle-outline" size={50} />
            </Pressable>

            <Pressable onPress={toCategories}>
                <Icon name="view-grid-outline" size={50} />
            </Pressable>

            <Pressable onPress={toSettings}>
                <Icon name="cog-outline" size={50} />
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FF00E0',
        display: 'flex',
        flexDirection: 'row',
        marginTop: 'auto',
        justifyContent: 'center',
        gap: 20,
        paddingVertical: 10,
    },
});

export default BottomNavbar;
