import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverViewScreen from './screens/MealsOverViewScreen';


const stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <StatusBar style='light'></StatusBar>
    <NavigationContainer>
      <stack.Navigator>
          <stack.Screen name='Meal Categories' component={CategoriesScreen}></stack.Screen>
          <stack.Screen name='Meals Overview' component={MealsOverViewScreen}></stack.Screen>
      </stack.Navigator>
    </NavigationContainer>
    </>
     
  );
}

const styles = StyleSheet.create({
  headTitle: {
    fontSize: 25,
    marginLeft: 75,
    color: 'red',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    marginTop: 60,
    justifyContent: 'center',
  },
});
