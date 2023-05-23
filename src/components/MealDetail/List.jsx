import { StyleSheet, Text, View } from 'react-native';

const List = (props) => {
  const items = props.items;
  return (
    <View style={styles.list}>
      {items.map((item) => (
        <Text style={styles.listText} key={item}>
          {item}
        </Text>
      ))}
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  list: {
    marginHorizontal: 40,
    marginVertical: 5,
  },
  listText: {
    fontSize: 20,
  },
});
