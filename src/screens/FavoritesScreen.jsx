import { StyleSheet, View, Text } from 'react-native';
// import { useContext } from 'react';
// import { FavoritesContext } from '../store/context/favoritesContext';
import { useSelector } from 'react-redux';
import MealsList from '../components/MealsList/MealsList';
import { MEALS } from '../data/dummy-data';
import colors from '../consts/colors';

const FavoritesScreen = () => {
  //const { favoriteIds } = useContext(FavoritesContext);
  const favoriteIds = useSelector((state) => state.favorite.favoriteIds);

  const mealList = MEALS.filter((item) => favoriteIds.includes(item.id));

  return (
    <View style={styles.rootContainer}>
      {mealList && mealList.length === 0 ? (
        <Text style={styles.message}>You currently don't have any favorite meals yet.</Text>
      ) : (
        <MealsList meals={mealList} />
      )}
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  message: {
    color: colors.brown,
    fontSize: 30,
    fontWeight: 'bold',
    margin: 20,
  },
});
