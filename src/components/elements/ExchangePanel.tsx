import { View, Text, StyleSheet } from "react-native";
import { Theme } from '@/styles';

const ExchangePage = ({ nameAprox, value }) => {
    return (
        <View style={styles.currency}>
            <Text style={styles.currencyName}>{nameAprox}</Text>
            <Text style={styles.currencyValue}>{value}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    currency: {
        flexShrink: 1,
        width: '100%',
        backgroundColor: Theme.colors.primary[400],
        borderRadius: 10,
        padding: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    currencyName: {
        color:  Theme.colors.primary[50],
        fontSize: 12,
        fontWeight: '900',
    },

    currencyValue: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ExchangePage;
