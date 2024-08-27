import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { RouteNames } from './RouteNames';
import { OnboardingStack } from './stacks';

export type AppNavigatorParamList = {
  [RouteNames.ONBOARDINGSTACK]: undefined;
};

const Stack = createStackNavigator<AppNavigatorParamList>();

export default function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={RouteNames.ONBOARDINGSTACK}>
      <Stack.Screen name={RouteNames.ONBOARDINGSTACK} component={OnboardingStack} />
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
