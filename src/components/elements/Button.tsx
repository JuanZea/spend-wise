import { Text, TouchableOpacity, StyleSheet } from 'react-native';

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
        backgroundColor: '#581c87',
        borderRadius: 10,
        width: '50%',
    },
    buttonText: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
        paddingHorizontal: 20,
    },
});

