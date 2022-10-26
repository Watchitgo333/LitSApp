import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from '../screens/menus/Home';
import { DetailsScreen } from '../screens/menus/BeginGroupPrayer';
import { ChoiceScreen } from '../screens/menus/SectionChoice';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GodScreen } from '../screens/sections/god/God';
const { Navigator, Screen } = createNativeStackNavigator();

const HomeNavigator = () => (
  <Navigator screenOptions={{headerShown: false}}>
    <Screen name='Home' component={HomeScreen}/>
    <Screen name='BeginGroupPrayer' component={DetailsScreen}/>
    <Screen name='SectionChoice' component={ChoiceScreen}/>
    <Screen name='God' component={GodScreen}/>
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator/>
  </NavigationContainer>
);