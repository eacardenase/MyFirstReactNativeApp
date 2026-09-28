import { StyleSheet, Text, View } from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>BoxObjectModel</Text> */}
      {/* <View style={styles.purpleBox}></View> */}
      <View style={styles.purpleBox}>
        <Text style={{ color: 'white' }}>Hello, my love!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6d622',
  },
  title: {
    fontSize: 30,
    // padding: 5,
    paddingHorizontal: 16,
    paddingVertical: 8,

    borderWidth: 10,
    // padding: 16,
    // margin: 16,
    // backgroundColor: 'yellow',
  },
  purpleBox: {
    // flex: 1,
    height: 30,
    backgroundColor: 'purple',
    // margin: 20,
    marginHorizontal: 20,
    marginVertical: 50,
    borderWidth: 2,
    padding: 5,
  },
});
