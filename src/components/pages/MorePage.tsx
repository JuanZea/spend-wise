import { View, Text, Button } from 'react-native';
import { useNavigate } from '@/hooks';
import { MenuButton } from '../elements';

export default function MorePage() {
    const { toTipsCalculator, toSettings } = useNavigate();
    return (
        <View>
            <Text style={{ fontSize: 36 }}>Otros</Text>

            <MenuButton route={toTipsCalculator} iconName="md-calculator-outline" routeDescription={"Calculadora de propinas"} />

            <MenuButton route={toSettings} iconName="md-settings-outline" routeDescription={"Ajustes"} />
            
        </View>
    );
}
