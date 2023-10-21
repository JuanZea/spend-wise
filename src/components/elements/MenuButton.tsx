import { StyleSheet, Pressable, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Theme } from '@/styles'
import { CText } from '../elements'

const MenuButton = ({ route, iconName, routeDescription}) => {
    return (
        <Pressable onPress={() => route({replace: true})}>
            <View style={buttonStyles.container}>
                <Ionicons name={iconName}  style={buttonStyles.icon}/>
                <CText textSize='md' textColor='light'>{routeDescription}</CText>
            </View>
        </Pressable>
    );
};


const buttonStyles = StyleSheet.create({
    //Duplicado borrar o reemplazar
    icon: {
        fontSize: 45,
        color: Theme.colors.primary[100],
        paddingRight: 10,
    
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Theme.colors.primary[500],
    }
});

export default MenuButton;