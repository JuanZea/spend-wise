import { View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Button, Icon, Screen, Select } from '@elements';
import { Categories } from '@/storage';
import { router } from '@/helpers';
import { useEffect, useState } from 'react';
import { styled } from 'nativewind';
import { useLocalSearchParams, useNavigation } from 'expo-router';

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

const actionData = {
    add: {
        title: 'Agregar categoría',
        action: 'Agregar',
    },
    edit: {
        title: 'Editar categoría',
        action: 'Editar',
    },
};

export default function Page() {
    const [old, setOld] = useState<number>();
    const [name, setName] = useState('');
    const [icon, setIcon] = useState('');

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
            setIcon(icon);
        }
    }, [params]);

    const addIcon = async () => {
        await Categories.add({ name, icon });
        router.forceReplace('/(app)/categories');
    };

    const editIcon = async () => {
        await Categories.update(old, { name, icon });
        router.forceReplace('/(app)/categories');
    };

    return (
        <>
            <Screen>
                <Text className="mb-1">
                    Las <Text className="font-bold">categorías</Text> son esenciales para organizar tus gastos y
                    optimizar tu presupuesto. Personalízalas según tus necesidades y preferencias para tener un control
                    más efectivo de tus finanzas.
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
                        defaultValue={icon && icons.findIndex((i) => i.name === icon)}
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
                    onPress={actionData[action].action === 'Agregar' ? addIcon : editIcon}
                >
                    {actionData[action].action}
                </Button>
            </Screen>
        </>
    );
}
