import { StyleSheet, View } from 'react-native';

export const HomeworkScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.purpleBox]} />
      <View style={[styles.box, styles.orangeBox]} />
      <View style={[styles.box, styles.blueBox]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'teal',
  },
  box: {
    // width: 100,
    // height: 100,
    borderWidth: 10,
    borderColor: 'white',
  },
  purpleBox: {
    backgroundColor: 'purple',
    flex: 1,
  },
  orangeBox: {
    backgroundColor: 'orange',
    flex: 1,
  },
  blueBox: {
    backgroundColor: 'cyan',
    flex: 2,
  },
});
