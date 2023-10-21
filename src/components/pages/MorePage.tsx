import { View, StyleSheet } from 'react-native';
import { useNavigate } from '@/hooks';
import { MenuButton } from '../elements';
import { CText } from '../elements'

export default function MorePage() {
    const { toTipsCalculator, toSettings } = useNavigate();
    return (
        <View style={styles.container}>
            <CText children={'Otros'} fontWeight='bold' textSize='lg' />
            <View>
                <MenuButton route={toTipsCalculator} iconName="md-calculator" routeDescription={"Calculadora de propinas"} />
                <MenuButton route={toSettings} iconName="md-settings" routeDescription={"Ajustes"} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        gap: 10,
    }
});