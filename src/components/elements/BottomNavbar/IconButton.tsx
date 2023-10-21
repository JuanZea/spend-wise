import { StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigate } from '@/hooks';
import { useLocation } from 'react-router-native';
import { Theme } from '@/styles';

const IconButton = ({ route, iconName }) => {
    const { to } = useNavigate();
    const { pathname } = useLocation();

    const isActive = () => {
        return pathname === `/${route}`;
    };

    return (
        <Pressable onPress={() => to(route)} style={[buttonStyles.container, isActive() && buttonStyles.selected]}>
            <Ionicons name={iconName} style={buttonStyles.icon} />
        </Pressable>
    );
};


const buttonStyles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'transparent',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    selected: {
        backgroundColor: Theme.colors.primary[500],
    },
    icon: {
        fontSize: 30,
        color: Theme.colors.primary[50],
    },
    active: {
        color: '#c4b5fd',
    },
});

export default IconButton;
