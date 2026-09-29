import { View, StyleSheet } from 'react-native';

export const DimensionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.pupleBox} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    // flex: 1,
    width: '100%',
    height: 300,
  },
  pupleBox: {
    backgroundColor: '#5856D6',
    height: '50%',
    width: '50%',
  },
});
