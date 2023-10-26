import Main from './src/Main';
// import './src/input.css'; TODO: for web use
// import "./nativewind-output";
import { Text, View } from 'react-native';
import { useFonts } from 'expo-font';

export default function App() {
    const [fontsLoaded] = useFonts({
        'Nunito-Light': require('./src/assets/fonts/Nunito-Light.ttf'),
        'Nunito-Regular': require('./src/assets/fonts/Nunito-Regular.ttf'),
        'Nunito-Bold': require('./src/assets/fonts/Nunito-Bold.ttf'),
    });

    if (!fontsLoaded) {
        return <Text>Cargando fuentes</Text>;
    }

    return <Main />
}
