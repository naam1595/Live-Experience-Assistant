import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LanguageContext from './LanguageContext';

export default function LanguageSelectionScreen({ onSelectLanguage }) {
  const { setLanguage } = useContext(LanguageContext);

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => {
          console.log('English selected');
          setLanguage('english');
          onSelectLanguage();
          // ... navigate to the next screen ...
        }}
      >
        <Text style={styles.buttonText}>English</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => {
          console.log('Spanish selected');
          setLanguage('spanish');
          onSelectLanguage();
          // ... navigate to the next screen ...
        }}
      >
        <Text style={styles.buttonText}>Español</Text>
      </TouchableOpacity>
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
  button: {
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 25,
    borderColor: 'black',
    borderWidth: 2,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
