import { StyleSheet, Text, View } from 'react-native';
import colors from '../../consts/colors';

const Subtitle = (props) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{props.children}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subtitleContainer: {
    padding: 4,
    marginHorizontal: 30,
    marginVertical: 6,
    borderBottomColor: colors.brown,
    borderBottomWidth: 2,
  },
  subtitle: {
    alignSelf: 'flex-start',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
