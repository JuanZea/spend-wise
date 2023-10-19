import { TextInput } from '@react-native-material/core';
import { View, Text } from 'react-native';

export default function TipsPage() {
    return (
        <View>
            <Text style={{ fontSize: 36 }}>Tips</Text>
            <TextInput label="% de propina" />
            <TextInput label="valor" />

        </View>
    );
}
