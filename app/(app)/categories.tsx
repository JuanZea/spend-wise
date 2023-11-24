import { FlatList, View, Text } from 'react-native';
import { Icon, Screen, Button } from '@elements';

const iconData = [
    { name: 'basket-sharp', label: 'Compras' },
    { name: 'bus-sharp', label: 'Transporte' },
    { name: 'car-sharp', label: 'Gasolina' },
    { name: 'cart-sharp', label: 'Mercado' },
    { name: 'fast-food-sharp', label: 'Comida' },
    { name: 'add-circle-sharp', label: 'Agregar aaasdf asdfasdfa ' },
    { name: 'fitness', label: 'Salud' },
    { name: 'library-sharp', label: 'Libros' },
    { name: 'phone-portrait-sharp', label: 'Datos' },
];

const Item = ({ item }) => (
    <View className="bg-primary-500 py-2 w-[92] mr-[21] rounded-lg flex-col items-center">
        <Icon classNames="text-white mb-2" size={40} name={item.name} />
        <Text className="text-white bg-primary-400 text-center px-2 w-full" numberOfLines={1}>{item.label}</Text>
    </View>
);

export default function Page() {
    return (
        <Screen classNames="pb-[40]">
            <FlatList
                data={iconData}
                numColumns={3}
                renderItem={Item}
                keyExtractor={(item) => item.name}
                contentContainerStyle={{
                    padding: 1,
                    gap: 21,
                }}
            />

            <View className="flex-row justify-center mt-auto">
                <Button route="/modals/addCategory">Agregar categoría</Button>
            </View>
        </Screen>
    );
}
