import { View, StyleSheet } from 'react-native';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const BottomNavbar = () => {
    return <View style={styles.container}>
    <Icon name="information-outline" size={(50)} />
    <Icon name="text-box-multiple-outline" size={(50)} />
    <Icon name="home-circle-outline" size={(50)} />
    <Icon name="view-grid-outline" size={(50)} />
    <Icon name="cog-outline" size={(50)} />
</View>;
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
