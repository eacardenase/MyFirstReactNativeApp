import { StyleSheet, View } from 'react-native';

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    // flexDirection: 'column-reverse',
  },
  box1: {
    backgroundColor: 'yellow',
    flex: 2,
  },
  box2: {
    backgroundColor: 'blue',
    flex: 1,
  },
  box3: {
    backgroundColor: 'red',
    flex: 1,
  },
});
