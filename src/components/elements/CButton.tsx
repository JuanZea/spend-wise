import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Theme } from '@/styles'

const Button = ({label}) => {
    return (
        <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>{label}</Text>
        </TouchableOpacity>
    );
};
export default Button;

const styles = StyleSheet.create({
    
    button: {
        display: 'flex',
        backgroundColor: Theme.colors.primary[400],
        borderRadius: 10,
        width: '50%',
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
        paddingHorizontal: 20,
    },
});

