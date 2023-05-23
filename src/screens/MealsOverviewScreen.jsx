import { useState, useEffect, useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealsList from '../components/MealsList/MealsList';

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

  return <MealsList meals={meals} />;
}

export default MealsOverviewScreen;
