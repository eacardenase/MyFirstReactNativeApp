import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
// import { PrimaryButton } from '../components';

export const CounterScreen = () => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{counter}</Text>

      {/* <PrimaryButton
        label="Incrementar"
        onPress={() => setCounter(counter + 1)}
        onLongPress={() => setCounter(0)}
      /> */}

      <Button
        mode="contained"
        onPress={() => setCounter(counter + 1)}
        onLongPress={() => setCounter(0)}
      >
        Increment
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontSize: 80,
    textAlign: 'center',
    fontWeight: 300,
  },
});
