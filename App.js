import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Login from './screens/Login';
import Welcome from './screens/Welcome';

const Stack = createStackNavigator();

const myOptions = {
  headerShown: false,
}

function App() {
  return (
    <View style={styles.container}>
      
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={myOptions}/>
        <Stack.Screen name='Welcome' component={Welcome} options={myOptions}/>
        <Stack.Screen name='Login' component={Login} options={myOptions}/>
      </Stack.Navigator>
      
      <StatusBar style="auto" />
    </View>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <App/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
