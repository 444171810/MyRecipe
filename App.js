import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import Colors from './consts/colors';
import { Button } from '@rneui/themed';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Categories'
          screenOptions={{
            contentStyle: { backgroundColor: Colors.yellow200 },
            headerStyle: { backgroundColor: Colors.brown },
            headerTitleStyle: { color: Colors.white },
          }}>
          <Stack.Screen
            name='Categories'
            options={{ title: 'Categories' }}
            component={CategoriesScreen}
          />
          <Stack.Screen name='MealsOverview' component={MealsOverviewScreen} />
          <Stack.Screen
            name='MealDetail'
            component={MealDetailScreen}
            // options={{
            //   headerRight: () => {
            //     return <Button title='Like Me'  />;
            //   },
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
