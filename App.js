import Main from './src/Main';
import { Text } from 'react-native';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'nunito-Light': require('./assets/fonts/Nunito-Light.ttf'),
    'nunito-Regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-Bold': require('./assets/fonts/Nunito-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <Text>Cargando fuentes</Text>;
  }
  return <Main />
}