import { StyleSheet, View, FlatList } from 'react-native';
import { useState, useEffect, useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealItem from '../components/MealItem';
import colors from '../consts/colors';

function MealsOverviewScreen({ route }) {
  const { categoryId } = route.params;
  const [meals, setMeals] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const list = MEALS.filter((item) => item.categoryIds.indexOf(categoryId) >= 0);
    setMeals(list);
  }, [categoryId]);

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((cat) => cat.id === categoryId).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  return (
    <View style={styles.rootContainer}>
      <FlatList
        data={meals}
        renderItem={(data) => <MealItem {...data.item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingVertical: 16,
    width: '100%',
    backgroundColor: colors.yellow200,
  },
});
