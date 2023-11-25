import { Screen, BalancePanel, Icon } from '@elements';
import { View, Text } from 'react-native';
import { Transactions } from '@/storage';
import { formatAmount } from '@/helpers/amount';
import { List } from 'react-native-paper';

export default function Page() {
    return (
        <Screen naked>
            <BalancePanel balance={Transactions.balance()} />

            <View className="flex-row mt-4" style={{ gap: 12 }}>
                <View className="bg-primary-500 p-3 w-full shrink rounded-xl justify-center items-center">
                    <View className="flex-row items-center" style={{ gap: 4 }}>
                        <Icon name="arrow-up" size={18} classNames="text-primary-50 text-green-500" />
                        <Text className="text-primary-50 font-bold">Ingresos</Text>
                    </View>
                    <Text className="text-white text-lg font-bold">{formatAmount(Transactions.income())}</Text>
                </View>

                <View className="bg-primary-500 p-3 w-full shrink rounded-xl justify-center items-center">
                    <View className="flex-row items-center" style={{ gap: 4 }}>
                        <Icon name="arrow-down" size={18} classNames="text-primary-50 text-red-500" />
                        <Text className="text-primary-50 font-bold">Gastos</Text>
                    </View>
                    <Text className="text-white text-lg font-bold">{formatAmount(Transactions.egress())}</Text>
                </View>
            </View>

            {/* <View className="mt-4">
                <List.Section>
                    <List.Subheader>Últimos movimientos</List.Subheader>
                    {Transactions.arrayData().map((transaction) => (
                        <List.Item
                            key={transaction.id}
                            title={transaction.description}
                            description={formatAmount(transaction.amount)}
                            left={(props) => (
                                <List.Icon
                                    {...props}
                                    icon={transaction.type === 'income' ? 'arrow-up' : 'arrow-down'}
                                    color={transaction.type === 'income' ? 'green' : 'red'}
                                />
                            )}
                        />
                    ))}
                </List.Section>
            </View> */}
        </Screen>
    );
}
