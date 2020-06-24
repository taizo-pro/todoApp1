import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import HomeScreen from './Screens/HomeScreen'

export default class App extends React.Component {

  render() {
  return (
    <SafeAreaView>
      <HomeScreen />
    </SafeAreaView>
  );
};
}

const styles = StyleSheet.create({
});

