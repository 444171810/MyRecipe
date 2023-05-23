import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import CategoriesScreen from './src/screens/CategoriesScreen';
import MealsOverviewScreen from './src/screens/MealsOverviewScreen';
import MealDetailScreen from './src/screens/MealDetailScreen';
import FavoritesScreen from './src/screens/FavoritesScreen';
//import FavoritesContextProvider from './src/store/context/favoritesContext';
import { store } from './src/store/redux/store';
import { Provider } from 'react-redux';
import Colors from './src/consts/colors';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Icon } from '@rneui/themed';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        sceneContainerStyle: { backgroundColor: Colors.yellow200 },
        headerStyle: { backgroundColor: Colors.brown },
        headerTitleStyle: { color: Colors.white },
        drawerContentStyle: { backgroundColor: Colors.yellow200 },
        drawerActiveBackgroundColor: Colors.yellow400,
        drawerActiveTintColor: Colors.brown,
        headerTintColor: Colors.white,
      }}
    >
      <Drawer.Screen
        name="Categories"
        options={{
          title: 'Categories',
          drawerIcon: ({ color, size }) => (
            <Icon color={color} size={size} type="font-awesome" name="home" />
          ),
        }}
        component={CategoriesScreen}
      />
      <Drawer.Screen
        name="Favorites"
        options={{
          title: 'Favorites',
          drawerIcon: ({ color, size }) => (
            <Icon color={color} size={size} type="font-awesome" name="heart" />
          ),
        }}
        component={FavoritesScreen}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Categories"
            screenOptions={{
              contentStyle: { backgroundColor: Colors.yellow200 },
              headerStyle: { backgroundColor: Colors.brown },
              headerTitleStyle: { color: Colors.white },
            }}
          >
            <Stack.Screen
              name="HomeDrawer"
              options={{ title: 'Home', headerShown: false }}
              component={DrawerNavigator}
            />
            <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
            <Stack.Screen name="MealDetail" component={MealDetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}
