import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet, Text, View, TextInput,
  TouchableOpacity
} from 'react-native';
import getWeatherForecast from './api.js'


export default function App() {
  const [text, setText] = useState('');
  const [forecast, setForecast ] = useState([]);


  console.log(forecast);

  return (
    <View style={styles.container}>
      <TextInput
        style={{ height: 40, textAlign: "center"}}
        placeholder="Enter Zip Code"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      <Text></Text>
      <TouchableOpacity onPress={() => getWeatherForecast(text).then(data => {setForecast(data.data.list[0])})} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Get Forecast</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#007AFF",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});
