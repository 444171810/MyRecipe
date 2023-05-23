import { StyleSheet, Text, View } from 'react-native';

const MealQuickInfo = (props) => {
  return (
    <View style={styles.infoContainer}>
      <Text style={styles.infoText}>{props.duration}mins</Text>
      <Text style={styles.infoText}>{props.complexity?.toUpperCase()}</Text>
      <Text style={styles.infoText}>{props.affordability?.toUpperCase()}</Text>
    </View>
  );
};

export default MealQuickInfo;

const styles = StyleSheet.create({
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoText: {
    paddingHorizontal: 8,
  },
});
