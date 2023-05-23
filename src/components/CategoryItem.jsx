import { StyleSheet, Text, View, Pressable, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CategoryItem = ({ id, title, color, onPress }) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.itemWrapper, { backgroundColor: color }]}>
      <Pressable
        android_ripple={{ color: '#ffffff99' }}
        style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}
        onPress={() => {
          navigation.navigate('MealsOverview', { categoryId: id });
        }}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  itemWrapper: {
    flex: 1,
    height: 150,
    width: 300,
    elevation: 4,
    margin: 10,
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  title: {
    textAlign: 'center',
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
