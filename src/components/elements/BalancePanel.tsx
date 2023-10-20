import { View, StyleSheet } from 'react-native';
import CText from './CText';
import ExchangePanel from './ExchangePanel';
import { Theme } from '@/styles';

const BalancePanel = () => {
    return (
        <View style={styles.root}>
            <View style={styles.root}>
                <CText fontWeight='bold' textColor='light' textSize='sm'>Total Balance</CText>
                <CText fontWeight='bold' textColor='light' textSize='lg'>7,736.000 COP</CText>
            </View>

            <View style={styles.exchangeContainer}>
                <ExchangePanel nameAprox="USD" value="2.0000 COP" />
                <ExchangePanel nameAprox="EUR" value="2.0000 COP" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        backgroundColor: Theme.colors.primary[500],
        padding: 12,
        alignItems: 'center',
        borderRadius: 16,
        gap: 8,
    },
    exchangeContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontSize: 50,
        gap: 20,
    },
});

export default BalancePanel;
