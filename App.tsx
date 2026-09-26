import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { CounterScreen } from './src/presentation/screens';

const App = () => {
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          {/* <HelloWorldScreen name="Edwin Cardenas" /> */}
          <CounterScreen />
        </SafeAreaView>
      </SafeAreaProvider>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
