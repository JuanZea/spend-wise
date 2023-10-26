import { StyleSheet, Pressable, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigate } from '@/hooks';
import { useLocation } from 'react-router-native';
import { Theme } from '@/styles';
import { styled } from 'nativewind';
import { twMerge } from 'tailwind-merge';

const StyledPressable = styled(Pressable);

const IconButton = ({ route, iconName, main = false, classNames = '' }) => {
    const { to } = useNavigate();
    const { pathname } = useLocation();

    const isActive = pathname === `/${route}`;

    return (
        <StyledPressable
            className={twMerge('rounded-md', classNames)}
            onPress={() => to(route)}
            style={[isActive && buttonStyles.selected]}
        >
            <Ionicons
                name={main && isActive ? 'add' : iconName}
                style={[buttonStyles.icon, main && (isActive ? buttonStyles.activeMain : buttonStyles.main)]}
            />
        </StyledPressable>
    );
};

const buttonStyles = StyleSheet.create({
    selected: {
        backgroundColor: Theme.colors.primary[700],
    },
    icon: {
        fontSize: 25,
        padding: 8,
        color: Theme.colors.primary[50],
    },
    main: {
        fontSize: 35,
        color: Theme.colors.primary[500],
    },
    activeMain: {
        fontSize: 35,
        color: Theme.colors.primary[50],
    },
    active: {
        color: '#c4b5fd',
    },
});

export default IconButton;
