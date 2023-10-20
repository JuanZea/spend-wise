import { StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Theme } from '@/styles'
import CText from './CText';

const IconBottomNavbar = ({ route, iconName}) => {
    return (
        <Pressable onPress={route}>
            <Ionicons name={iconName}  style={buttonStyles.container}/>
        </Pressable>
    );
};

const buttonStyles = StyleSheet.create({
    container: {
        fontSize: 45,
        color: Theme.colors.primary[500],
    
    },
    active: {
        color: '#c4b5fd',
    }
});

export default IconBottomNavbar;
