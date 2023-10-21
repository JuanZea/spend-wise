import { View, StyleSheet } from 'react-native';
import CText from './CText';
import ExchangePanel from './ExchangePanel';
import { Theme } from '@/styles';

const BalancePanel = () => {
    return (
        <View style={styles.root}>
            <View style={styles.main}>
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
        width: '100%',
        alignItems: 'center',
        borderRadius: 16,
        gap: 8,
    },
    main: {
        alignItems: 'center',
    },
    exchangeContainer: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontSize: 50,
        gap: 12,
    },
});

export default BalancePanel;
