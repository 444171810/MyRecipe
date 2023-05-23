import { StyleSheet, View, FlatList } from 'react-native';
import MealItem from './MealItem';
import colors from '../../consts/colors';

const MealsList = ({ meals }) => {
  return (
    <View style={styles.rootContainer}>
      <FlatList
        data={meals}
        renderItem={(data) => <MealItem {...data.item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingVertical: 16,
    width: '100%',
    backgroundColor: colors.yellow200,
  },
});
