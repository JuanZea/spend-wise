import { StyleSheet, Pressable } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { Ionicons } from '@expo/vector-icons';

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
        color: '#4c1d95',
    
    },
    active: {
        color: '#c4b5fd',
    }
});

export default IconBottomNavbar;
