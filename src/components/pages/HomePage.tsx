import { View, Text, Button} from 'react-native';
import { StyleSheet } from 'react-native';
import { ExchangeView} from '../elements/homeElements'


export default function HomePage() {
    return (
        <View style={styles.container}>
            
            <View style={styles.balance}>
                <Text style={styles.nameBalance}>Total Balance</Text>
                <Text style={styles.valueBalance}>7,736.000 COP</Text>

                <View style={styles.exchangeContainer}>
                <ExchangeView nameAprox="USD" value="2.0000 COP"/>
                <ExchangeView nameAprox="EUR" value="2.0000 COP"/>
                
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ddd6fe',
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
