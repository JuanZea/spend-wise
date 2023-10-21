import { StyleSheet, Pressable, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Theme } from '@/styles'
import { CText } from '../elements'

const MenuButton = ({ route, iconName, routeDescription }) => {
    return (
        <Pressable onPress={() => route({ replace: true })}>
            <View style={buttonStyles.container}>
                <Ionicons name={iconName} style={buttonStyles.icon} />
                <CText textSize='md' textColor='light'>{routeDescription}</CText>
            </View>
        </Pressable>
    );
};


const buttonStyles = StyleSheet.create({
    //Duplicado borrar o reemplazar
    icon: {
        fontSize: 30,
        color: 'white',
        paddingRight: 10,

    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Theme.colors.primary[500],
        padding: 10,
        margin: 10,
        borderRadius: 16,
    }
});

export default MenuButton;