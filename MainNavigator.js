import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from './src/Screens/Home';
import Login from './src/Screens/Login';
import Cadastro from './src/Screens/Cadastro';
// import Desc from './src/Screens/Desc';
// import Categories from './src/Screens/Categories';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
    return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName='Home'>
              <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
              <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
              <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }}/>
              {/* <Stack.Screen name="Desc" component={Desc} options={{ headerShown: false }}/> */}
              {/* <Stack.Screen name="Categories" component={Categories} options={{ headerShown: false }}/> */}
          </Stack.Navigator>
      </NavigationContainer>
    )
  }