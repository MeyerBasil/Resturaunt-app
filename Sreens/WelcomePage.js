import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';

export default function WelcomePage() {

  const navigation = useNavigation()

  const signup = () => {
    navigation.navigate('Signup');
  };

  const login = () => {
    navigation.replace('Login');
   
  }
  return (
    <View style={styles.container}>
      
      <Image style={styles.logo} source={require('../assets/logo.jpg')} />

      <Text style={styles.paragraph}>
        Welcome
         to 
        Justfood.
      </Text>

    
      <TouchableOpacity style={styles.button1} onPress={signup} >
      <Text style={styles.buttonText1}>
      SIGN UP
      </Text>
      </TouchableOpacity>

      <Text style={styles.or}>
      OR
      </Text>

      <TouchableOpacity style={styles.button2} onPress={login} >
      <Text style={styles.buttonText2}>
      LOG IN
      </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 14,
    backgroundColor: 'red',
  },

  logo: {
    height: 158,
    width: 188,
    marginTop: '50%',
  },

  paragraph: {
    margin: 15,
    marginTop: 20,
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
    color: '#fff',
  },

  button1: {
    margin: 15,
    width: 220,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 15,
  },

  buttonText1: {
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 8,
    fontSize: 20,
    fontWeight: '500',
    color: 'red',
  },

  or: {
    fontWeight: '300',
    fontSize: 17,
    color: '#fff',
  },

  button2: {
    margin: 15,
    width: 220,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 15,
  },

  buttonText2: {
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 8,
    fontSize: 20,
    fontWeight: '500',
    color: 'red',
  },
});
 