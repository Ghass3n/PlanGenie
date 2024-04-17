import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';

export default function FlatButton3({ text, navigation }) {
  const [loaded] = useFonts({
    Montserrat: require('../assets/fonts/Montserrat-Italic-VariableFont_wght.ttf'),
  });

  if (!loaded) {
    return null;
  }

  const handlePress = () => {
    navigation.goBack(); // Navigate back to the previous screen
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#6C21DC', // Example background color
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
    fontFamily: 'Montserrat',
  },
});
