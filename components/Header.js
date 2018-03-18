import * as React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';
import colors from '../styles/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.primaryGreen,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  text: {
    alignSelf: 'center',
    color: colors.black,
    fontSize: 30,
  },
});

const Header = () => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.text}>Mealplanner Native</Text>
  </SafeAreaView>
);

export default Header;
