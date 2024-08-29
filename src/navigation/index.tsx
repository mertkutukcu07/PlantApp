import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RouteNames } from './RouteNames';
import { OnboardingStack, TabStack } from './stacks';
import { SplashScreen } from '~/screens';
import { useSelector } from 'react-redux';
import { RootState } from '~/redux/store';

export type AppNavigatorParamList = {
  [RouteNames.SPLASH]: undefined;
  [RouteNames.ONBOARDINGSTACK]: undefined;
  [RouteNames.TABSTACK]: undefined;
};

const Stack = createStackNavigator<AppNavigatorParamList>();

export default function AppStack() {
  const { isOnboardingCompleted } = useSelector((state: RootState) => state.onboarding);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
      initialRouteName={RouteNames.SPLASH}>
      <Stack.Screen name={RouteNames.SPLASH} component={SplashScreen} />
      {isOnboardingCompleted ? (
        <Stack.Screen name={RouteNames.TABSTACK} component={TabStack} />
      ) : (
        <Stack.Screen name={RouteNames.ONBOARDINGSTACK} component={OnboardingStack} />
      )}
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
