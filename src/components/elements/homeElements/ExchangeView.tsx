import { View, Text, StyleSheet } from 'react-native';

const ExchangeView = ({ nameAprox, value }) => {
    return (
        <View style={styles.currency}>
            <Text style={styles.currencyName}>{nameAprox}</Text>
            <Text style={styles.currencyValue}>{value}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    currency: {
        padding: 10,
        backgroundColor: '#581c87',
        borderRadius: 10,
        paddingVertical: 20,
        paddingHorizontal: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    currencyName: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '900',
    },

    currencyValue: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ExchangeView;
