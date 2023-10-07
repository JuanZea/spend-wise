import { View, Text, Button } from 'react-native';
import { BottomNavbar } from '@/components/elements';
import Constants from 'expo-constants';

const Main = () => {
  return (
    <View style={{ width: '100%', height: '100%', backgroundColor: '#FFFFE0', paddingTop: Constants.statusBarHeight }}>
      <Text style={{ backgroundColor: 'red' }}>Main</Text>
      <BottomNavbar />
    </View>
  );
};

export default Main;
