import { FlatList, View, Text } from 'react-native';
import { Icon, Screen, Button } from '@elements';
import { Categories } from '@/storage';

const Item = ({ item }) => (
    <View className="bg-primary-500 py-2 w-[92] mr-[21] rounded-lg flex-col items-center">
        <Icon classNames="text-white mb-2" size={40} name={item.icon} />
        <Text className="text-white bg-primary-400 text-center px-2 w-full" numberOfLines={1}>{item.name}</Text>
    </View>
);

export default function Page() {
    return (
        <Screen classNames="pb-[40]">
            <FlatList
                data={Categories.DATA}
                numColumns={3}
                renderItem={Item}
                keyExtractor={(item) => item.name}
                contentContainerStyle={{
                    padding: 1,
                    gap: 21,
                }}
            />

            <View className="flex-row justify-center mt-auto pt-5">
                <Button route="/modals/addCategory">Agregar categoría</Button>
            </View>
        </Screen>
    );
}
