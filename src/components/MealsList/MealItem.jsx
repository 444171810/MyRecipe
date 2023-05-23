import { StyleSheet, Text, View, Image } from 'react-native';
import colors from '../../consts/colors';
import { Button } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import MealQuickInfo from '../MealQuickInfo';

const MealItem = (props) => {
  const navigation = useNavigation();

  return (
    <Button
      style={styles.rootContainer}
      buttonStyle={{
        flex: 1,
        alignSelf: 'center',
        borderRadius: 10,
        backgroundColor: colors.yellow400,
        marginBottom: 20,
        width: '80%',
      }}
      title={
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            <Image style={styles.image} source={{ uri: props.imageUrl }} />
            <Text style={styles.title}>{props.title}</Text>
          </View>
          <MealQuickInfo
            duration={props.duration}
            complexity={props.complexity}
            affordability={props.affordability}
          />
        </View>
      }
      onPress={() => {
        navigation.navigate('MealDetail', props);
      }}
    ></Button>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  rootContainer: {
    //height: 200,
    paddingVertical: 10,
    marginHorizontal: 16,
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 5,
  },
});
