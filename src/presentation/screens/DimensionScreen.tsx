import {
  View,
  StyleSheet,
  // Dimensions,
  Text,
  useWindowDimensions,
} from 'react-native';

// const { width, height } = Dimensions.get('window');

export const DimensionScreen = () => {
  const { width, height } = useWindowDimensions();

  return (
    <View>
      <View style={styles.container}>
        <View style={{ ...styles.pupleBox, width: width * 0.6 }} />
      </View>

      <Text style={styles.title}>W: {width}</Text>
      <Text style={styles.title}>H: {height}</Text>
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
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
});
