import { TextInput } from '@react-native-material/core';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { CButton } from '../elements';
import { Theme } from '@/styles'
import { CText } from '../elements';

export default function BudgetsPage() {
    return (
        <View style={styles.container}>
            <View style={styles.budgets}>

                <CText fontWeight='bold' textColor='light' textSize='lg'>Presupuesto</CText>

                <CButton label="Global" />
                <View style={styles.createBudget}>
                    <TextInput style={styles.input} label="Valor" />
                    <CButton label="Crear" />
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
        flex: 1,
    },
    budgets: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        width: '90%',
        backgroundColor: Theme.colors.primary[500],
        borderRadius: 15,
        paddingVertical: 20,
    },
    title: {
        fontSize: 25,
        color: Theme.colors.primary[50],
        fontWeight: 'bold',
        justifyContent: 'center',
    },
    input: {
        borderRadius: 5,
        width: '80%',
        marginBottom: 10,

    },
    createBudget: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: 50,
    }

});