import { View, Text, TextInput } from 'react-native';
import { Screen } from '@elements';
import { useState } from 'react';

export default function Page() {
    const [text, onChangeText] = useState('Useless Text');

    return (
        <Screen>
            <Text className="mb-1">
                Las <Text className="font-bold">categorías</Text> son esenciales para organizar tus gastos y optimizar
                tu presupuesto. Personalízalas según tus necesidades y preferencias para tener un control más efectivo
                de tus finanzas.
            </Text>

            <Text>¡Empieza ahora a crear tus propias categorías y observa cómo mejora tu gestión financiera!</Text>

            <TextInput onChangeText={onChangeText} value={text} />
        </Screen>
    );
}
