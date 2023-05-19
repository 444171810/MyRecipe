import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';
import Colors from '../consts/colors';
import colors from '../consts/colors';

const MealsOverviewScreen = ({ route }) => {
  const { categoryId } = route.params;
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const list = MEALS.filter((item) => {
      return item.categoryIds.indexOf(categoryId) >= 0;
    });
    setMeals(list);
  }, [categoryId]);

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

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingVertical: 16,
    width: '100%',
    backgroundColor: colors.yellow200,
  },
});
