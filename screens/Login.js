import React from 'react';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Image,  } from 'react-native';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';

const Login = () => {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                {/* Welcome message */}
                <Text style={styles.text_header}>Sign In</Text>
                <Text style={styles.text}>
                    Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, 
                    ed do eiusmod.
                </Text>
            </View>
            <View style={styles.footer}> 
                <View style={styles.login} >
                    <TextInput style={styles.inputBox} placeholder='Username' />
                </View>

                <View style={styles.login} >
                    <TextInput style={styles.inputBox} placeholder='Password' />
                </View>

                <Text style={{left: 200}}>Forgot Password?</Text>

                <View style={styles.button}>
                    <TouchableOpacity style={styles.touch1} onPress={() => {}}>
                      <Text  style={styles.textLog}>Sign In</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.button2}>
                    <TouchableOpacity style={styles.touch2} onPress={() => {}}>
                      <AntDesign name="google" size={34} color="#DB4437" />
                      <Text  style={styles.textSignUp}> Continue with Google</Text>
                      <AntDesign style={styles.icon} name="arrowright" size={22} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touch2} onPress={() => {}}>
                      <FontAwesome5 name="facebook" size={34} color="#4267B2" />
                      <Text  style={styles.textSignUp}> Continue with Facebook</Text>
                      <AntDesign style={styles.icon} name="arrowright" size={22} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffb404',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  touch1: {
    backgroundColor: '#000',
    width: 280,
    borderRadius: 50,
    padding: 15,
  },
  icon: {
    top: 7,
  },
  touch2: {
    backgroundColor: 'white',
    width: 280,
    borderRadius: 50,
    padding: 15,
    marginVertical: 5,
    justifyContent:"space-between",
    flexDirection:"row",
    shadowColor: 'black',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 30,
    shadowOffset: {
      width: 1,
      height: 10,
    },

  },
   login: {
    flexDirection: 'row', 
    margin: 5, 
    justifyContent: 'center',
  },
  textLog: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
  textSignUp: {
    color: '#000',
    fontWeight: 'normal',
    textAlign: 'center',
    fontSize: 18,
    top: 7,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  text_header: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
      color: '#000',
      fontSize: 18,
  },
  inputBox: {
    backgroundColor: '#f2f2f2',
    width: 285,
    height: 52,
    borderRadius: 25,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a'
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  button2: {
    alignItems: 'center',
    marginTop: 80,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
   text: {
    color: '#000',
    marginTop: 10,
  },
});

export default Login;