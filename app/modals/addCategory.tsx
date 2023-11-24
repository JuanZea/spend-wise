import { View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Button, Icon, Screen, Select } from '@elements';
import { Categories } from '@/storage';
import { useState } from 'react';
import { styled } from 'nativewind';
import { router } from 'expo-router';

const StyledTextInput = styled(TextInput);

const icons = [
    { name: 'basket-sharp', label: 'Canasta de compras' },
    { name: 'bus-sharp', label: 'Bus' },
    { name: 'car-sharp', label: 'Carro' },
    { name: 'cart-sharp', label: 'Carrito de compras' },
    { name: 'fast-food-sharp', label: 'Comida rápida' },
    { name: 'fitness', label: 'Salud' },
    { name: 'library-sharp', label: 'Libros' },
    { name: 'phone-portrait-sharp', label: 'Teléfono Móvil' },
    { name: 'airplane', label: 'Avión' },
    { name: 'alarm', label: 'Alarma' },
    { name: 'american-football', label: 'Fútbol Americano' },
    { name: 'analytics', label: 'Analítica' },
    { name: 'aperture', label: 'Apertura' },
    { name: 'apps', label: 'Aplicaciones' },
    { name: 'archive', label: 'Archivo' },
    { name: 'at', label: 'Arroba' },
    { name: 'attach', label: 'Adjuntar' },
    { name: 'bar-chart', label: 'Gráfica de barras' },
    { name: 'barbell', label: 'Barra' },
    { name: 'barcode', label: 'Código de barras' },
    { name: 'battery-charging', label: 'Batería cargando' },
    { name: 'bicycle', label: 'Bicicleta' },
    { name: 'bluetooth', label: 'Bluetooth' },
    { name: 'boat', label: 'Bote' },
    { name: 'briefcase', label: 'Maletín' },
];

const iconIds = icons.map((icon) => icon.name);

export default function Page() {
    const [name, setName] = useState('');
    const [icon, setIcon] = useState('');

    const addIcon = async () => {
        await Categories.addCategory({ name, icon });
        while (router.canGoBack()) router.back();
        router.replace('/(app)/categories');
    };

    return (
        <Screen>
            <Text className="mb-1">
                Las <Text className="font-bold">categorías</Text> son esenciales para organizar tus gastos y optimizar
                tu presupuesto. Personalízalas según tus necesidades y preferencias para tener un control más efectivo
                de tus finanzas.
            </Text>

            <Text>¡Empieza ahora a crear tus propias categorías y observa cómo mejora tu gestión financiera!</Text>

            <StyledTextInput
                className="my-2"
                mode="outlined"
                label="Nombre de la categoría"
                onChangeText={setName}
                value={name}
            />

            <View className="flex-row items-center justify-between">
                <Select
                    width="85%"
                    data={icons.map((icon) => icon.label)}
                    onSelect={(item, index) => {
                        setIcon(iconIds[index]);
                    }}
                    placeholder="Selecciona un icono"
                />

                <Icon name={icon} size={40} classNames="text-primary-400" />
            </View>

            <Button
                disabled={!name || !icon}
                classNames="mt-4 w-[200] mx-auto"
                textClass="text-center"
                onPress={addIcon}
            >
                Agregar
            </Button>
        </Screen>
    );
}
