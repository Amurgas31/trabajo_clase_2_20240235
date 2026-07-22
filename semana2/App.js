import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import PokemonScreen from './src/screens/PokemonScreen';
import DogsScreen from './src/screens/DogsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator
        initialRouteName="Pokemon"
        screenOptions={{
          headerShown: false, // Ocultamos barra por defecto para manejar SafeArea en las pantallas
        }}
      >
        <Stack.Screen name="Pokemon" component={PokemonScreen} />
        <Stack.Screen name="Dogs" component={DogsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}