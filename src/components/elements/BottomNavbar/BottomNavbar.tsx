import { View, StyleSheet, Pressable, Text, FlatList } from 'react-native';
import IconButton from './IconButton';

const BottomNavbar = () => {
    return (
        <View className="flex flex-row justify-around items-center bg-primary-500 p-2">
            <IconButton route="budget" />
            <IconButton route="categories" />
            <IconButton
                main
                classNames="bg-primary-50 border-4 border-primary-500 -top-4 p-2 -my-4 rounded-full"
                route="home"
            />
            <IconButton route="more" />
            <IconButton route="settings" />
        </View>
    );
};

export default BottomNavbar;
