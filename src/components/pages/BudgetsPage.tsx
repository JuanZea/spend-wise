import { TextInput } from '@react-native-material/core';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Button from '@elements/Button';

export default function BudgetsPage() {
    return (
        <View style={styles.container}>
                        <View style={styles.budgets}>

                <Text style={styles.title}>Presupuesto</Text>
            
               <Button label="Global" />
                <View style={styles.createBudget}>
                    <TextInput style={styles.input} label="Valor" />
                 <Button label="Crear" />
                </View>
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        backgroundColor: '#ddd6fe',
        paddingVertical: 10,

    },
    budgets: {
        display: 'flex',
        marginTop: 'auto',
        alignItems: 'center',
        gap: 10,
        width: '90%',
        backgroundColor: '#6b21a8',
        borderRadius: 15,
        paddingVertical: 20,
    },
    title: {
        fontSize: 25,
        color: '#FFFFFF',
        fontWeight: 'bold',
        justifyContent: 'center',
    },
    input: {
        borderRadius: 5,
        width: '80%',
        marginBottom: 10,

    },
    createBudget:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: 50,
    }
  
});