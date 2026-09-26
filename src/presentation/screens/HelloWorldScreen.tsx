import { StyleSheet, Text, View } from 'react-native';

const HelloWorldScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, World!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  title: {
    fontSize: 45,
    textAlign: 'center',
    color: 'white',
    padding: 20,
    backgroundColor: 'red',
  },
});

export default HelloWorldScreen;
