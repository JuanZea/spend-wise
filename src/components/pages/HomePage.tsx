import { View, Text, Button} from 'react-native';
import { BalancePanel } from '../elements';


export default function HomePage() {
    return (
        <View className='p-4'>
            <BalancePanel />
        </View>
    );
}
