import * as React from 'react';
import { Button, SafeAreaView, StyleSheet } from 'react-native';
import Header from './Header';
import * as mixins from '../styles/mixins';

const styles = StyleSheet.create({
  container: {
    ...mixins.centeredFlex,
    ...mixins.flexColumn,
    justifyContent: 'space-around',
    height: '40%',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

type Props = {
  navigation: any,
};

class HomeScreen extends React.Component<Props, void> {
  handleIngredientsClick = () => {
    this.props.navigation.navigate('Ingredients');
  };

  handleRecipesClick = () => {
    this.props.navigation.navigate('Recipes');
  };

  handleMealPlansClick = () => {
    this.props.navigation.navigate('MealPlans');
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Button
          style={styles.text}
          title="Ingredients"
          onPress={this.handleIngredientsClick}
        />
        <Button
          style={styles.text}
          title="Recipes"
          onPress={this.handleRecipesClick}
        />
        <Button
          style={styles.text}
          title="Meal Plans"
          onPress={this.handleMealPlansClick}
        />
      </SafeAreaView>
    );
  }
}

HomeScreen.navigationOptions = {
  headerTitle: <Header />,
};

export default HomeScreen;
