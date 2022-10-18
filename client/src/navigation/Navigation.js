import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from '../screens/Home';
import { DetailsScreen } from '../screens/BeginGroupPrayer';
import { ChoiceScreen } from '../screens/SectionChoice';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const { Navigator, Screen } = createNativeStackNavigator();

const HomeNavigator = () => (
  <Navigator screenOptions={{headerShown: false}}>
    <Screen name='Home' component={HomeScreen}/>
    <Screen name='BeginGroupPrayer' component={DetailsScreen}/>
    <Screen name='SectionChoice' component={ChoiceScreen}/>
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator/>
  </NavigationContainer>
);