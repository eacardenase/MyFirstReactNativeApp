import { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export const CounterScreen = () => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{counter}</Text>

      <Button onPress={() => setCounter(counter + 1)} title="+1" />
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
