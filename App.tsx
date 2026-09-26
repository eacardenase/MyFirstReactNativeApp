import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import HelloWorldScreen from './src/presentation/screens/HelloWorldScreen';
import { StyleSheet } from 'react-native';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <HelloWorldScreen />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
