import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import {
  FlexScreen,
  // BoxObjectModelScreen,
  // DimensionScreen,
  // PositionScreen,
  // CounterM3Screen,
  //  CounterScreen
} from './src/presentation/screens';

const App = () => {
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          {/* <HelloWorldScreen name="Edwin Cardenas" /> */}
          {/* <CounterScreen /> */}
          {/* <CounterM3Screen /> */}
          {/* <BoxObjectModelScreen /> */}
          {/* <DimensionScreen /> */}
          {/* <PositionScreen /> */}
          <FlexScreen />
        </SafeAreaView>
      </SafeAreaProvider>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: 500,
  },
});

export default App;
