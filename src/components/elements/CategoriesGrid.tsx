import { FlatList, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Theme } from '@/styles'
import CText from './CText';

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

const GridIconView = () => {
    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Ionicons name={item.name} size={50} color={Theme.colors.primary[500]} />
            <CText textSize='sm'>{item.label}</CText>
        </View>
    );

    return (
        
        <FlatList
            data={iconData}
            numColumns={3} // Número de columnas en la cuadrícula
            renderItem={renderItem}
            keyExtractor={(item) => item.name}
            contentContainerStyle={styles.grid}
        />
    );
};

const styles = StyleSheet.create({
    grid: {
        justifyContent: 'space-between',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 20,

    },
    item: {
        width: 100,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});

export default GridIconView;
