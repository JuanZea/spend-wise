import { FlatList, View, Text, Alert } from 'react-native';
import { Icon, Screen, Button, Touchable } from '@elements';
import { Categories } from '@/storage';
import { router, usePathname } from 'expo-router';
import { router as routeHelper } from '@/helpers';

const Item = ({ item, pathname }) => (
    <Touchable
        onPress={() => {
            Alert.alert(item.name, 'Personaliza o elimina tu categoría', [
                {
                    text: 'Cancelar',
                    style: 'cancel',
                },
                {
                    text: 'Eliminar',
                    onPress: () => {
                        Alert.alert('¿Realmente desea eliminar esta categoría?', 'Esta accion no se puede deshacer', [
                            {
                                text: 'Cancelar',
                                style: 'cancel',
                            },
                            {
                                text: 'Confirmar',
                                onPress: async () => {
                                    await Categories.remove(item.id);
                                    routeHelper.forceReplace(pathname);
                                },
                            },
                        ]);
                    },
                },
                {
                    text: 'Editar',
                    onPress: () => {
                        router.push({
                            pathname: '/modals/storeCategory/[action]',
                            params: { action: 'edit', category: item.id },
                        });
                    },
                },
            ]);
        }}
        classNames="bg-primary-500 py-2 w-[92] mr-[21] rounded-lg flex-col items-center"
    >
        <View className="w-full">
            <Icon classNames="text-white mb-2 mx-auto" size={40} name={item.icon} />
            <Text className="text-white bg-primary-400 text-center px-2 w-full" numberOfLines={1}>
                {item.name}
            </Text>
        </View>
    </Touchable>
);

export default function Page() {
    const pathname = usePathname();

    return (
        <Screen classNames="pb-[40]">
            <FlatList
                data={Categories.arrayData()}
                numColumns={3}
                renderItem={({ item }) => Item({ item, pathname })}
                keyExtractor={(item) => item.name}
                contentContainerStyle={{
                    padding: 1,
                    gap: 21,
                }}
            />

            <View className="flex-row justify-center mt-auto pt-5">
                <Button route={{ pathname: '/modals/storeCategory/[action]', params: { action: 'add' } }}>
                    Agregar categoría
                </Button>
            </View>
        </Screen>
    );
}
