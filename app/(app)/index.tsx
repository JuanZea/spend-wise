import { View, Text } from 'react-native';
import { BalancePanel } from '@elements';
import Constants from 'expo-constants';

export default function Page() {
    return (
        <View className="p-5" style={{ paddingTop: Constants.statusBarHeight + 20 }}>
            <BalancePanel />
        </View>
    );
}
