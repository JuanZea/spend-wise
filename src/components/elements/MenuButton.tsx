import { StyleSheet, Pressable, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Theme } from '@/styles'
import { CText } from '../elements'

const MenuButton = ({ route, iconName, routeDescription}) => {
    console.log(route);
    return (
        <Pressable onPress={route}>
            <View style={buttonStyles.cosa}>
                <Ionicons name={iconName}  style={buttonStyles.container}/>
                <CText textSize='sm'>{routeDescription}</CText>
            </View>
        </Pressable>
    );
};


const buttonStyles = StyleSheet.create({
    //Duplicado borrar o reemplazar
    container: {
        fontSize: 45,
        color: Theme.colors.primary[500],
    
    },
    cosa: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    }
});

export default MenuButton;