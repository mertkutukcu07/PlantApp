import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RouteNames } from './RouteNames';
import { OnboardingStack, TabStack } from './stacks';

export type AppNavigatorParamList = {
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
      initialRouteName={RouteNames.ONBOARDINGSTACK}>
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
