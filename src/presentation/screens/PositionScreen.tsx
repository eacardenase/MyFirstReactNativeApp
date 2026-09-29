import { View, StyleSheet } from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.blueBox} />
      <View style={styles.greenBox} />
      <View style={styles.purpleBox} />
      <View style={styles.orangeBox} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: 150,
    // width: 300,
  },
  blueBox: {
    backgroundColor: 'cyan',
    ...StyleSheet.absoluteFill,
  },
  purpleBox: {
    backgroundColor: 'purple',
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    // top: -50,
    bottom: 0,
  },
  orangeBox: {
    backgroundColor: 'orange',
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    right: 0,
  },
  greenBox: {
    // flex: 1,
    backgroundColor: 'green',
    // width: 100,
    // height: 100,
    // width: '100%',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    top: 10,
    right: 10,
    bottom: 10,
    left: 10,
  },
});
