import { View, Text } from 'react-native';
import CText from './CText';
import { formatAmount } from '@/helpers/amount';
import { useEffect, useState } from 'react';
import { getExchangeCOP } from '@/service';

const ExchangePanel = ({ nameAprox, value }) => {
    return (
        <View className="bg-primary-400 p-3 w-full shrink rounded-xl justify-center items-center">
            <Text className="text-primary-50 font-bold">{nameAprox}</Text>
            <Text className="text-white text-lg font-bold">{value}</Text>
        </View>
    );
};

export default function BalancePanel({ balance }) {
    const [USDConvertion, setUSDRate] = useState<number>();
    const [EURConvertion, setEURRate] = useState<number>();

    useEffect(() => {
        getExchangeCOP('USD', balance).then((rate) => setUSDRate(rate));
        getExchangeCOP('EUR', balance).then((rate) => setEURRate(rate));
    }, []);

    return (
        <View className="bg-primary-500 rounded-2xl p-3">
            <View className="items-center">
                <CText fontWeight="bold" textColor="light" textSize="sm">
                    Saldo Total
                </CText>
                <CText fontWeight="bold" textColor="light" textSize="lg">
                    {formatAmount(balance)} COP
                </CText>
            </View>
            <View className="mt-3 w-full flex-row justify-between" style={{ gap: 12 }}>
                <ExchangePanel
                    nameAprox="USD"
                    value={(USDConvertion || USDConvertion === 0) ? '≈ ' + formatAmount(USDConvertion) : 'Calculando...'}
                />
                <ExchangePanel
                    nameAprox="EUR"
                    value={(EURConvertion || EURConvertion === 0) ? '≈ ' + formatAmount(EURConvertion, '€') : 'Calculando...'}
                />
            </View>
        </View>
    );
}
