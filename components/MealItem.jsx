import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import colors from '../consts/colors';
import { Button } from '@rneui/themed';

const MealItem = ({ title, imageUrl, duration, complexity, affordability }) => {
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
            <Text style={styles.title}>{title}</Text>
            <Image style={styles.image} source={{ uri: imageUrl }} />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>{duration}mins</Text>
            <Text style={styles.infoText}>{complexity.toUpperCase()}</Text>
            <Text style={styles.infoText}>{affordability.toUpperCase()}</Text>
          </View>
        </View>
      }></Button>
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
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoText: {
    paddingHorizontal: 8,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 5,
  },
});
