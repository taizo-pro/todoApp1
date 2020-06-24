import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.headerTitle}>Todoリスト</Text>
        <TextInput style={styles.todoInput} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>追加する</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headerTitle: {
    textAlign: "center",
    fontSize: 30
  },
  todoInput: {
    backgroundColor: "#fff",
    width: "70%",
    alignSelf: "center",
    marginTop: 20,
    padding: 10,
    fontSize: 20
  },
  container: {
    backgroundColor: "#ddd",
  },
  button: {
    backgroundColor: "blue",
    width: "60%",
    alignSelf: "center",
    marginTop: 10
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    padding: 10
  }
});