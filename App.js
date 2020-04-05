import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  Home  from "./screens/Home";
import SecondPage from "./screens/SecondPage";
import FriendList from "./screens/FriendList";



const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SecondPage" component={SecondPage} />
        <Stack.Screen name="FriendList" component={FriendList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

