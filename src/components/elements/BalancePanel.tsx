import { View, Text } from 'react-native';
import CText from './CText';
import { Transactions } from '@/storage';
import { formatAmount } from '@/helpers/amount';

const ExchangePanel = ({ nameAprox, value }) => {
    return (
        <View className="bg-primary-400 p-3 w-full shrink rounded-xl justify-center items-center">
            <Text className="text-primary-50 font-bold">{nameAprox}</Text>
            <Text className="text-white text-lg font-bold">{value}</Text>
        </View>
    );
};

export default function BalancePanel() {
    return (
        <View className="bg-primary-500 rounded-2xl p-3">
            <View className="items-center">
                <CText fontWeight="bold" textColor="light" textSize="sm">
                    Saldo Total
                </CText>
                <CText fontWeight="bold" textColor="light" textSize="lg">
                    {formatAmount(Transactions.balance())} COP
                </CText>
            </View>
            <View className="mt-3 w-full flex-row justify-between" style={{ gap: 12 }}>
                <ExchangePanel nameAprox="USD" value="2.0000 USD" />
                <ExchangePanel nameAprox="EUR" value="2.0000 EUR" />
            </View>
        </View>
    );
}
