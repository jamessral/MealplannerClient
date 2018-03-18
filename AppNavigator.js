import { StackNavigator } from 'react-navigation';
import HomeScreen from './components/HomeScreen';
import Ingredients from './components/Ingredients/Ingredients';

export default StackNavigator({
  Home: { screen: HomeScreen },
  Ingredients: { screen: Ingredients },
});
