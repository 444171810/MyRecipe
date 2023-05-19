import { StyleSheet, View, FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryItem from '../components/CategoryItem';

const CategoriesScreen = ({ navigation }) => {
  return (
    <View style={styles.rootContainer}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={(item) => <CategoryItem {...item.item} />}
        numColumns={2}
      />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    width: '100%',
    flex: 1,
  },
});
