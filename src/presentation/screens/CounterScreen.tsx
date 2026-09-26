import { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export const CounterScreen = () => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{counter}</Text>

      <Pressable
        style={styles.button}
        onPress={() => setCounter(counter + 1)}
        onLongPress={() => setCounter(0)}
      >
        <Text>+1</Text>
      </Pressable>
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
  button: {
    color: 'red',
    backgroundColor: 'yellow',
    padding: 20,
  },
});
