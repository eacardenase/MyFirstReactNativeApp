import { View, StyleSheet, Dimensions, Text } from 'react-native';

const { width, height } = Dimensions.get('window');

export const DimensionScreen = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.pupleBox} />
      </View>

      <Text>W: {width}</Text>
      <Text>H: {height}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    // flex: 1,
    width: 300,
    height: 300,
  },
  pupleBox: {
    backgroundColor: '#5856D6',
    height: '50%',
    width: '50%',
  },
});
