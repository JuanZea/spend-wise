import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { AppBar, HStack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function App() {
  return (<>
    <AppBar color='pink' tintColor='red' 
    leading={props => (
      <IconButton icon={props => <Icon name="panda" {...props} />} {...props} />
    )} style={{ paddingTop: 20}} title="Spend Wise"/>
    <View style={styles.container}>
      <Text>Juan David</Text>
      <Text>Juan Fernando</Text>
      <Text>Eliana</Text>
      <Text>Universidad de Antioquia</Text>
      <Text>2023</Text>
      <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{width: 200, height: 200}}
        />
      <StatusBar style="auto" />
    </View>
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
