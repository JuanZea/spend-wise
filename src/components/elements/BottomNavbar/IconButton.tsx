import { StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Theme } from '@/styles';
import { styled } from 'nativewind';
import { twMerge } from 'tailwind-merge';
import { usePathname, router as expoRouter } from 'expo-router';
import { Routes } from '@/constants';
import { router } from '@/helpers';

const StyledPressable = styled(Pressable);

const IconButton = ({ route, main = false, classNames = '' }) => {
    const pathname = usePathname();
    const routePath = Routes[route].path;
    const isActive = pathname === routePath;

    const to = (routePath: string) => {
        if (routePath === pathname) {
            if (routePath === '/')
                expoRouter.push({
                    pathname: '/modals/storeTransaction/[action]',
                    params: { action: 'add' },
                });
            return;
        }
        router.forceReplace(routePath);
    };

    return (
        <StyledPressable
            className={twMerge('rounded-md', classNames)}
            onPress={() => to(routePath)}
            style={[isActive && buttonStyles.selected]}
        >
            <Ionicons
                name={main && isActive ? 'add' : Routes[route].icon}
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
