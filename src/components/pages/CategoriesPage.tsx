import { FlatList, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Theme } from '@/styles'
import { CText } from '../elements';
import { CategoriesGrid } from '../elements';

export default function CategoriesPage() {
    return (
        <View style={styles.container}>
            <CText fontWeight='bold' textSize='lg'>Tus Categorías</CText>
            <CategoriesGrid />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        gap: 10,
    }
});