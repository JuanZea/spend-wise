import { Screen, BalancePanel, Icon } from '@elements';
import { View, Text } from 'react-native';
import { Transactions } from '@/storage';
import { formatAmount } from '@/helpers/amount';
import { List } from 'react-native-paper';
import { styled } from 'nativewind';
import { ScrollView } from 'react-native-gesture-handler';

const ListSection = styled(List.Section);
const ListHeader = styled(List.Subheader);
const ListItem = styled(List.Item);

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

            <ListSection className="max-h-80 bg-primary-500 rounded-xl p-4 mt-5" style={{ gap: 4 }}>
                <ListHeader className="font-bold text-lg p-0 text-primary-50">Resumen</ListHeader>
                {Transactions.arrayData().length === 0 && (
                    <Text className="font-bold p-0 text-primary-50">No tienes movimientos</Text>
                )}
                <ScrollView>
                    {Transactions.arrayData()
                        .map((transaction) => (
                            <ListItem
                                className="bg-primary-50 p-0 flex-row w-full shrink rounded-xl justify-center items-center mb-2"
                                key={transaction.id}
                                title={formatAmount(transaction.amount)}
                                description={transaction.name}
                                left={(props) => (
                                    <List.Icon
                                        {...props}
                                        icon={transaction.type === 'income' ? 'arrow-up' : 'arrow-down'}
                                        color={transaction.type === 'income' ? 'green' : 'red'}
                                    />
                                )}
                            />
                        ))
                        .reverse()}
                </ScrollView>
            </ListSection>
        </Screen>
    );
}
