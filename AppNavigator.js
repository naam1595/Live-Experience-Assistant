// AppNavigator.js

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LanguageSelectionScreen from './LanguageSelectionScreen';
import WelcomeScreen from './WelcomeScreen';
import TutorialScreen from './TutorialScreen'; // Assuming you've created this

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="LanguageSelection" component={LanguageSelectionScreen} />
      <Stack.Screen name="Tutorial" component={TutorialScreen} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
