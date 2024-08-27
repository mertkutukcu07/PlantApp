import { createStackNavigator } from '@react-navigation/stack';

import { RouteNames } from '../RouteNames';

import { WelcomeScreen } from '~/screens';
export type OnboardingStackParamList = {
  [RouteNames.WELCOME]: undefined;
};

const Stack = createStackNavigator<OnboardingStackParamList>();

export default function RootStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={RouteNames.WELCOME}>
      <Stack.Screen name={RouteNames.WELCOME} component={WelcomeScreen} />
    </Stack.Navigator>
  );
}
