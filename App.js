import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  Text,
  Image,
  SafeAreaView ,
  Button
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Image
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
        style={{ width: 200, height: 200 }}
      />
      <StatusBar style="auto" />
      <Button title="Anyád" onPress={() => alert('Eyyo!')} />
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
