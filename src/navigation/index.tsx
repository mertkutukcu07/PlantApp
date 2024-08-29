import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RouteNames } from './RouteNames';
import { OnboardingStack, TabStack } from './stacks';
import { SplashScreen } from '~/screens';

export type AppNavigatorParamList = {
  [RouteNames.SPLASH]: undefined;
  [RouteNames.ONBOARDINGSTACK]: undefined;
  [RouteNames.TABSTACK]: undefined;
};

const Stack = createStackNavigator<AppNavigatorParamList>();

export default function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={RouteNames.SPLASH}>
      <Stack.Screen name={RouteNames.SPLASH} component={SplashScreen} />
      <Stack.Screen name={RouteNames.ONBOARDINGSTACK} component={OnboardingStack} />
      <Stack.Screen name={RouteNames.TABSTACK} component={TabStack} />
    </Stack.Navigator>
  );
}

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};
