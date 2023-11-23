import { FlatList, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Theme } from '@/styles';
import { SectionTitle, Icon, CategoriesGrid, Button } from '@elements';

const iconData = [
    { name: 'basket-sharp', label: 'Compras' },
    { name: 'bus-sharp', label: 'Transporte' },
    { name: 'car-sharp', label: 'Gasolina' },
    { name: 'cart-sharp', label: 'Mercado' },
    { name: 'fast-food-sharp', label: 'Comida' },
    { name: 'fitness', label: 'Salud' },
    { name: 'library-sharp', label: 'Libros' },
    { name: 'phone-portrait-sharp', label: 'Datos' },
    { name: 'add-circle-sharp', label: 'Agregar...' },
];

const addCategory = () => {
    console.log('Agregar categoría');
}

const Item = ({ item }) => (
    <View className="bg-primary-500 p-2 w-[92] mr-[21] rounded-lg flex-col items-center">
        <Icon classNames="text-white" size={40} name={item.name} />
        <Text className="text-white">{item.label}</Text>
    </View>
);

export default function CategoriesPage() {
    return (
        <View className='h-full pb-[40]'>
            <SectionTitle icon="md-grid">Categorías</SectionTitle>

            <FlatList
                data={iconData}
                numColumns={3} // Número de columnas en la cuadrícula
                renderItem={Item}
                keyExtractor={(item) => item.name}
                contentContainerStyle={{
                    padding: 21,
                    gap: 21,
                }}
            />

            <View className='flex-row justify-center mt-auto'>
                <Button onPress={addCategory}>Agregar categoría</Button>
            </View>
        </View>
    );
}
