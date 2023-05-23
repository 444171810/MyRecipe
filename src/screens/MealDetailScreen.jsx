import { StyleSheet, Text, Image, ScrollView, SafeAreaView } from 'react-native';
import { useCallback, useLayoutEffect } from 'react';
import MealQuickInfo from '../components/MealQuickInfo';
import List from '../components/MealDetail/List';
import Subtitle from '../components/MealDetail/Subtitle';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/themed';

const MealDetailScreen = ({ route }) => {
  const { imageUrl, duration, complexity, affordability, title, ingredients, steps } = route.params;
  const navigation = useNavigation();

  const likeHandler = useCallback(() => {
    console.log(`like this`);
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Icon size={20} name="heart-o" type="font-awesome" onPress={likeHandler} />;
      },
    });
  }, []);

  return (
    <SafeAreaView style={styles.rootContainer}>
      <ScrollView>
        <Image style={styles.image} source={{ uri: imageUrl }} />
        <Text style={styles.title}>{title}</Text>
        <MealQuickInfo duration={duration} complexity={complexity} affordability={affordability} />
        <Subtitle>Ingredients</Subtitle>
        <List items={ingredients} />
        <Subtitle>Steps</Subtitle>
        <List items={steps} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    //flex: 1,
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
