import Main from './src/Main';
import { useFonts } from 'expo-font';

export default function App() {
  useFonts({
    'Nunito-Light': require('./assets/fonts/Nunito-Light.ttf'),
    'Nunito-Regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'Nunito-Bold': require('./assets/fonts/Nunito-Bold.ttf'),
  });
  return <Main />
}