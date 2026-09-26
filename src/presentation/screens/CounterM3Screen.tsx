import { useState } from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../theme/global.styles';
import { FAB } from 'react-native-paper';

export const CounterM3Screen = () => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <View style={globalStyles.centerContainer}>
      <Text style={globalStyles.title}>{counter}</Text>

      <FAB
        style={globalStyles.fab}
        label="+1"
        onPress={() => setCounter(counter + 1)}
        onLongPress={() => setCounter(0)}
      />
    </View>
  );
};
