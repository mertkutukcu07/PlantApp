import { createStackNavigator } from '@react-navigation/stack';

import { RouteNames } from '../RouteNames';
import { GetStartedScreen, OnboardingScreen } from '~/screens';

export type OnboardingStackParamList = {
  [RouteNames.GETSTARTED]: undefined;
  [RouteNames.ONBOARDING]: undefined;
};

const Stack = createStackNavigator<OnboardingStackParamList>();

export default function RootStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
      initialRouteName={RouteNames.GETSTARTED}>
      <Stack.Screen name={RouteNames.GETSTARTED} component={GetStartedScreen} />
      <Stack.Screen name={RouteNames.ONBOARDING} component={OnboardingScreen} />
    </Stack.Navigator>
  );
}
