import { View, Text } from 'react-native';
import { TextInput, RadioButton } from 'react-native-paper';
import { Button, Icon, Screen, Select } from '@elements';
import { Categories, Transactions } from '@/storage';
import { router } from '@/helpers';
import { useEffect, useState } from 'react';
import { styled } from 'nativewind';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { Category, TransactionType } from '@/storage/types';
import { PaymentMethods } from '@/constants';

const StyledTextInput = styled(TextInput);

const actionData = {
    add: {
        title: 'Agregar transacción',
        action: 'Agregar',
    },
    edit: {
        title: 'Editar transacción',
        action: 'Editar',
    },
};

export default function Page() {
    const [transactionType, settransactionType] = useState<TransactionType>('income');
    const [old, setOld] = useState<number>();
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState<Category>();
    const [paymentMethod, setPaymentMethod] = useState(PaymentMethods['cash']);
    const [description, setDescription] = useState('');

    const navigation = useNavigation();
    const params = useLocalSearchParams();
    const action = params.action as string;

    if (!action) {
        router.reload();
        return;
    }

    useEffect(() => {
        navigation.setOptions({ title: actionData[action].title });
    }, [navigation]);

    useEffect(() => {
        if (action === 'edit') {
            const { id, name, icon } = Categories.data()[params.category as string];
            setOld(id);
            setName(name);
            setCategory(icon);
        }
    }, [params]);

    const addTransaction = async () => {
        await Transactions.add({
            name,
            amount: Number(amount),
            category: category.id,
            type: transactionType,
            date: new Date(),
            paymentMethod: paymentMethod.id as keyof typeof PaymentMethods,
            description,
        });
        router.forceReplace('/');
    };

    const editTransaction = async () => {
        // await Categories.update(old, { name, icon: category });
        // router.forceReplace('/(app)/categories');
    };

    return (
        <>
            <Screen>
                <StyledTextInput
                    className="mb-2"
                    mode="outlined"
                    label="Nombre de la transacción"
                    onChangeText={setName}
                    value={name}
                />

                <StyledTextInput
                    keyboardType="numeric"
                    inputMode="numeric"
                    className="mb-2"
                    mode="outlined"
                    label="Monto"
                    onChangeText={setAmount}
                    value={amount}
                />

                <View className="flex-row items-center justify-between mt-2 mb-4">
                    <Select
                        width="85%"
                        data={Categories.arrayData().map((c) => c.name)}
                        onSelect={(item, index) => {
                            setCategory(Categories.arrayData()[index]);
                        }}
                        placeholder="Categoría"
                    />

                    {category && <Icon name={category.icon} size={40} classNames="text-primary-400" />}
                </View>

                <View className="flex-row items-center justify-between mt-2 mb-4">
                    <Select
                        width="85%"
                        defaultValue={0}
                        data={Object.keys(PaymentMethods).map((key) => PaymentMethods[key].name)}
                        onSelect={(item, index) => {
                            setPaymentMethod(Object.keys(PaymentMethods).map((key) => PaymentMethods[key])[index]);
                        }}
                        placeholder="Método de pago"
                    />

                    {paymentMethod && <Icon name={paymentMethod.icon} size={40} classNames="text-primary-400" />}
                </View>

                <Text className="text-lg">Tipo de transacción</Text>
                <View className="flex-row gap-4">
                    <View className="flex-row items-center">
                        <RadioButton
                            value="income"
                            status={transactionType === 'income' ? 'checked' : 'unchecked'}
                            onPress={() => settransactionType('income')}
                        />
                        <Text>Ingreso</Text>
                    </View>
                    <View className="flex-row items-center">
                        <RadioButton
                            value="egress"
                            status={transactionType === 'egress' ? 'checked' : 'unchecked'}
                            onPress={() => settransactionType('egress')}
                        />

                        <Text>Gasto</Text>
                    </View>
                </View>

                <StyledTextInput
                    className="mt-2"
                    mode="outlined"
                    label="Descripción (opcional)"
                    onChangeText={setDescription}
                    value={description}
                />

                <Button
                    disabled={!name || !amount || !category}
                    classNames="mt-4 w-[200] mx-auto"
                    textClass="text-center"
                    onPress={actionData[action].action === 'Agregar' ? addTransaction : editTransaction}
                >
                    {actionData[action].action}
                </Button>
            </Screen>
        </>
    );
}
