import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styled } from 'nativewind';

const StyledIcon = styled(Ionicons);

const SectionTitle = ({ children, icon }) => {
    return (
        <View className="bg-primary-400 px-4 py-2 flex-row items-center gap-2">
            <StyledIcon name={icon} className='text-white' />
            <Text className="text-white font-semibold">{children}</Text>
        </View>
    );
};

export default SectionTitle;
