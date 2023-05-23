import { StyleSheet, Text, Image, ScrollView, SafeAreaView, View } from 'react-native';
import { useCallback, useLayoutEffect, useState, useEffect } from 'react';
import MealQuickInfo from '../components/MealQuickInfo';
import List from '../components/MealDetail/List';
import Subtitle from '../components/MealDetail/Subtitle';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/themed';
import { useContext } from 'react';
//import { FavoritesContext } from '../store/context/favoritesContext';
import { useSelector, useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../store/redux/favoriteSlice';

const MealDetailScreen = ({ route }) => {
  const { id, imageUrl, duration, complexity, affordability, title, ingredients, steps } =
    route.params;
  const navigation = useNavigation();
  //const { favoriteIds, addFavorite, removeFavorite } = useContext(FavoritesContext);
  const favoriteIds = useSelector((state) => state.favorite.favoriteIds);
  const dispatch = useDispatch();

  const isFavorited = favoriteIds.includes(id);

  const likeHandler = useCallback(() => {
    if (!isFavorited) {
      //addFavorite(id);
      dispatch(addFavorite(id));
    } else {
      //removeFavorite(id);
      dispatch(removeFavorite(id));
    }
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Icon
            size={20}
            name={isFavorited ? 'heart' : 'heart-o'}
            type="font-awesome"
            onPress={likeHandler}
          />
        );
      },
    });
  }, [isFavorited]);

  return (
    <SafeAreaView style={styles.rootContainer}>
      <ScrollView>
        <View style={styles.innerContainer}>
          <Image style={styles.image} source={{ uri: imageUrl }} />
          <Text style={styles.title}>{title}</Text>
          <MealQuickInfo
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
          <Subtitle>Ingredients</Subtitle>
          <List items={ingredients} />
          <Subtitle>Steps</Subtitle>
          <List items={steps} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    //flex: 1,
  },
  innerContainer: {
    flex: 1,
    marginBottom: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
});
