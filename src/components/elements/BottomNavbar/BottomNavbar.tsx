import { View, StyleSheet, Pressable, Text, FlatList } from 'react-native';
import IconButton from './IconButton';
import { ROUTE_NAMES } from '@/constants';

const BottomNavbar = () => {
    return (
        <View className="flex flex-row justify-around items-center bg-primary-500 p-2">
            <IconButton route={ROUTE_NAMES.budget} iconName="md-cash" />
            <IconButton route={ROUTE_NAMES.categories} iconName="md-grid" />
            <IconButton
                main
                classNames="bg-primary-50 border-4 border-primary-500 -top-4 p-2 -my-4 rounded-full"
                route={''}
                iconName="md-home"
            />
            <IconButton route={ROUTE_NAMES.information} iconName="md-information-circle" />
            <IconButton route={ROUTE_NAMES.more} iconName="ellipsis-horizontal" />
        </View>
    );
};

export default BottomNavbar;
