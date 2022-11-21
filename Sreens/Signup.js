import  React, {useState} from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/core';

export default function Signup() {
  

    const login = () => {
        navigation.navigate('Login');
      };
    
      const [email, setEmail] = React.useState('');
      const [password, setPassword] = React.useState('');
    
    
      const navigation = useNavigation()
 
    return (
      <View style={styles.container}>
        
        <Image style={styles.logo} source={require('../assets/logo.jpg')} />
        <Text style={styles.header}>
 SIGN UP
 </Text>
 <View style={styles.line} />
 
<View style={styles.emailInput}>
 <AwesomeTextInput label="Enter email" 
 onChangeText={text => setEmail(text)}
 value={email}

 />
  </View>

<View style={styles.passwordInput}>
  <AwesomeTextInput label="Create Password"  
  onChangeText={text => setPassword(text)}
  value={password}
secureTextEntry
  />
  </View>

<Text style={styles.linkText}>
      Already have an Account?
      </Text>


<TouchableOpacity>      
<Text style={styles.link} onPress={login}>
      Log in
      </Text>
</TouchableOpacity>


      <TouchableOpacity style={styles.button1} onPress={handleSignUp} >
      <Text style={styles.buttonText1}>
      Sign up
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
   