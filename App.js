import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  Text,
  Image,
  SafeAreaView 
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>ASD</Text>
      <Image source={require('./assets/favicon.png')}/>
      <Image borderRadius={15} blurRadius={2} source={{
        width: 200,
        height: 200,
        uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
