import { View, StyleSheet } from 'react-native';
import { Button } from '@elements';
import { Routes } from '@/constants';

export default function Page() {
    return (
            <View className='p-5'>
                <Button route={Routes.information.path}>{Routes.information.name}</Button>
                <Button route={Routes.tipsCalculator.path}>{Routes.tipsCalculator.name}</Button>
            </View>
    );
}