import { View, Text, Button} from 'react-native';
import { StyleSheet } from 'react-native';
import { ExchangeView} from '../elements/homeElements'
import { Theme } from '@/styles'
import { BalancePanel } from '../elements';


export default function HomePage() {
    return (
        <View style={styles.container}>

            <BalancePanel />
            
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: Theme.colors.primary[50],
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 20,
        paddingVertical: 10,
    },

    balance: {
        display: 'flex',
        marginTop: 'auto',
        fontSize: 50,
        padding: 10,
        backgroundColor: '#6b21a8',
        color: '#FFFFFF',
        borderRadius: 15,
        alignItems: 'center',
        gap: 20,
        width: '95%',
    },

    nameBalance: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: 15,
        color: '#FFFFFF',
        flexDirection: 'row',
        fontWeight: 'bold',
    },

    valueBalance: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: 30,
        color: '#FFFFFF',
        backgroundColor: '#581c87',
        width: '100%',
    },

    exchangeContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontSize: 50,
        gap: 20,
    }


});
