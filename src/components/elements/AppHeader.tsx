import { View, Text } from 'react-native';
import { styled } from 'nativewind';
import { Ionicons } from '@expo/vector-icons';
import { Routes } from '@/constants';

const StyledIcon = styled(Ionicons);

export default function AppHeader({ route }) {
    return (
        <View className="flex-row items-center gap-4">
            <StyledIcon name={Routes[route].icon} size={30} className="text-white" />
            <Text className="text-white text-xl">{Routes[route].name}</Text>
        </View>
    );
}
